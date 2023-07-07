<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: '',
  },
})
</script>

<template>
  <li>
    <input type="checkbox" completed="todo.isCompleted" />
    <div class="todo">
      <input type="text" :value="todo.todo" /><span>{{ todo.todo }}</span>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
