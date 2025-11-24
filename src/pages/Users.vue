<script setup lang="ts">
  import { userList } from '../consts';

</script>

<template>
  <p>Users!!!</p>
  <div class="routes">
    <RouterLink :to="`/users/${user?.id}`" v-for="user in userList" :key="user.id">{{ user.name }}</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .routes {
    display: flex;
    gap: 6px;
    flex-direction: column;
  }
</style>