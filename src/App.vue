<template>
  <div id="app">
    <TodoListBoard/>
  </div>
</template>

<script>
import TodoListBoard from '@/components/todo-list-board/TodoListBoard.vue';

export default {
  name: 'App',
  components: {
    TodoListBoard
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap');
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
