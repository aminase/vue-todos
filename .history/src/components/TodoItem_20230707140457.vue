<script setup>
import { Icon } from '@iconify/vue'

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
    <div class="todo-actions">
      <Icon
        v-if="todo.isEditing"
        icon="ph:check-circle"
        class="icon check-icon"
        color="41b080"
        width="22"
      />
      <Icon v-else icon="ph:pencil-fill" class="icon edit-icon" color="41b080" width="22" />
      <Icon icon="ph:trash" class="icon trash-icon" color="f95e5e" width="22" />
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
