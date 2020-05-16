<template>
  <div class="todoitem">
    <li class="li-style">
      {{content}}
      <div class="div-tools">
        <div id="edit_bar" class="edit_bar" v-bind:class="[isActive ? '' : 'disableClass']">
          <input v-model="opencontent"/>
          <button @click="listEdit">確認修改</button>
        </div>
        <button @click="toggle">修改</button>
        <button @click="listDelete">刪除</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  // 接收父組件的參數
  props: ['content','id'],
  data(){
    return{
        isActive : false,
        opencontent : this.content
    }
  },
  //新增result的watch，監聽變更同步到openStatus
  //監聽父組件對props屬性result的修改，并同步到组件内的data属性
  watch: {
    content (val) {
      this.opencontent = val
    }
  },
  methods: {
    toggle(){
      this.isActive = !this.isActive;
    },
    listEdit () {
      // 發射訊息給父組件，並將 index 索引值帶過去
      this.$emit('edit', this.id, this.opencontent);
      this.toggle();
    },
    listDelete () {
      // 發射訊息給父組件，並將 index 索引值帶過去
      this.$emit('delete', this.id);
    }
  }
}
</script>

<style scoped>

.disableClass{
    display:none;
}
.todoitem{
  width: 300px;
  height: 30px;
  margin: 5px 0px 5px;
  padding-top: 3px;
}
.li-style{
  width: 250px;
  text-align: right;
}
.div-tools{
  display:inline;
}
.edit_bar{
  position: absolute;
}
</style>
