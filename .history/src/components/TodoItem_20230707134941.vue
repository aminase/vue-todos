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
  </li>
</template>

<style lang="scss" scoped></style>
