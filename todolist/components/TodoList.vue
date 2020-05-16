<template>
    <div>
      <div>
        <TodoInput @add="listAdd"></TodoInput>
      </div>
      <div style="margin-top:10px;">
        <ul>
          <TodoItem v-for="item in content"
            :key="item.id"
            :id="item.id"
            :content="item.content"
            @edit="listEdit"
            @delete="listDelete"
            >
          </TodoItem>
        </ul>
      </div>
    </div>
</template>

<script>
import TodoInput from '~/components/TodoInput'
import TodoItem from '~/components/TodoItem'
import axios from 'axios'

export default {
    components: {
        TodoItem,
        TodoInput
    },
    data () {
        return {
            content: []
        }
    },
    mounted() {
        this.getTodoList();
    },
    methods: {
      getTodoList(){
        axios.get('/api/').then((response) => {
            // Check the response was a success
            if(response.status === 200)
            {
              let employees = [];
              response.data.forEach(element => {
                employees.push({
                    "id" : element._id,
                    "content" : element.content,
                    "isFinish" : element.isFinish
                });
              });
              this.content = employees
              //this.content = [response.data._id,response.data._id];
            }
        });
      },
      listAdd(data){
        //this.content.push(data)
        this.getTodoList()
      },
      listEdit (id, content) {
        axios.put('/api/', { id: id, content: content }).then((response) => {
            // Check the response was a success
            if(response.status === 200)
            {
                this.content.forEach(element=>{
                  if(element.id == id){
                    element.content = content
                  }
                })
            }
        });
      },
      listDelete (id) {
        console.log("aa");
        axios.post('/api/delete/', { id: id }).then((response) => {
            // Check the response was a successc
            if(response.status === 200)
            {
              let count = 0;
              this.content.forEach(element=>{
                if(element.id == id){
                  console.log(count);
                  this.content.splice(count, 1);
                }
                count++
              });
            }
        });
      }

    }
}
</script>

<style lang="">

</style>
