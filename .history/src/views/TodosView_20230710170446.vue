<script setup>
import { ref } from 'vue'
import { uid } from 'uid'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoItemVue from '../components/TodoItem.vue'
import { Icon } from '@iconify/vue'

const todoList = ref([])

const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem('todoList'))
  if (savedTodoList) {
    todoList.value = savedTodoList
  }
}

//each time page is loaded function is called
fetchTodoList()

const setTodoListLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
}

const createToDo = todo => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null,
  })
  setTodoListLocalStorage()
}

const toggleTodoComplete = todoPos => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
  setTodoListLocalStorage()
}

const toggleEditTodo = todoPos => {
  todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing
  setTodoListLocalStorage()
}

const updateTodo = (todoVal, todoPos) => {
  todoList.value[todoPos].todo = todoVal
  setTodoListLocalStorage()
}

const deleteTodo = todoId => {
  todoList.value = todoList.value.filter(todo => todo.id !== todoId)
  setTodoListLocalStorage()
}
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createToDo" />
    <ul class="todo-list" v-if="todoList.length > 0">
      <TodoItem
        v-for="(todo, index) in todoList"
        v-bind:key="index"
        :todo="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>

    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no todo's to complete! Add one!</span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
