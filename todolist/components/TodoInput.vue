<template>
    <div>
        <div>
            <input v-model="work"/>
            <button @click="listAdd" :disabled="isdisabled">新增</button>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data () {
        return {
            work: '',
            isdisabled: false
        }
    },
    methods: {
        async listAdd () {
          this.isdisabled = true;
          await axios.post('/api/', { content: this.work })
            .then((response) => {
                // Check the response was a success
                if(response.status === 201)
                {
                    this.isdisabled = false;
                }
            });
          //this.list.push(this.work);
          this.work = '';
          await this.$emit('add', this.work);

        }
    }
}
</script>

<style lang="">

</style>
