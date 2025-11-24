<script setup lang="ts">
  import { ref } from 'vue';
  import { useTodos } from '../store/todos';

  const value = ref('');
  const store = useTodos();

  const handleClick = () => {
    store.addTodo({
      id: store.todoList.length,
      title: value.value,
      isCompleted: false
    });
    value.value = '';
  }
</script>

<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="handleClick">Добавить тудушку</button>
  </div>
</template>