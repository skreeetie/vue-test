<script setup lang="ts">
  import { computed, ref, watch } from 'vue';

  interface Todo {
    id: string;
    text: string;
  }

  const value = ref('');
  const todoList = ref<Todo[]>([])

  const addTodo = () => {
    if (!value.value.trim()) return;
    todoList.value.push({
      id: crypto.randomUUID(),
      text: value.value
    });
    value.value = '';
  }
  const reversedTodos = computed(() => {
    return [...todoList.value].reverse();
  })

  watch(todoList, () => {
    console.log('todos changed', todoList.value)
  }, {deep: true})
</script>

<template>
  <div class="inputs">
    <input type="text" v-model="value" />
    <button @click="addTodo">Добавить</button>
  </div>
  <ul v-if="todoList.length > 0">
    <li v-for="todo in reversedTodos" :key="todo.id">{{ todo.text }}</li>
  </ul>
  <p v-if="todoList.length > 0">Всего задач: {{ todoList.length }}</p>
  <p v-else>Нет задач</p>
</template>

<style lang="scss" scoped>
  .inputs {
    display: flex;
    gap: 4px;
    align-items: center;
  }
</style>