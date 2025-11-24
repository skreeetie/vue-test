<script setup lang="ts">
  import { useTodos } from '../store/todos';

  const store = useTodos();

  const handleToggle = (id: number) => {
    store.toggleTodo(id);
  }
</script>

<template>
  <ul>
    <li v-for="todo in store.todoList" :key="todo.id">
      {{ todo.title }}: {{ todo.isCompleted ? 'Completed' : 'To do' }}
      <button @click="handleToggle(todo.id)">Toggle completion</button>
    </li>
  </ul>
  <p>Всего выполнено: {{ store.completedTodos.length }}</p>
</template>