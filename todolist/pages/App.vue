<template>
  <div id="app">
    <todo-list/>
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

export default {
  name: 'app',
  components: {
    // 'todo-list': TodoList // ES5寫法
    TodoList                 // ES6寫法
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
