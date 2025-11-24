<script setup lang="ts">
  import { useRoute } from 'vue-router';
import { userList } from '../consts';

  const route = useRoute();
  const user = userList.find((user) => Number(route.params.id) === user.id);
</script>

<template>
  <p>Username: {{ user?.name }}</p>
  <p>Id: {{ user?.id }}</p>
</template>