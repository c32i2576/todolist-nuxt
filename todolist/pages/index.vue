<template>
  <div class="container">
    <div>
      <h1>
        todolist
      </h1>
        <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    TodoList
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
