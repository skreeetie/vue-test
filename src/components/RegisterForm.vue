<script setup lang="ts">
import { computed, ref } from 'vue';
import { register } from '../api/auth';
import MyInput from './MyInput.vue';
import Loader from './Loader.vue';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const isValid = computed(() => (
    name.value.trim() && email.value.trim() && password.value.trim()
  ))
  const handleSubmit = async () => {
    if (!isValid.value) return;

    loading.value = true;
    const res = await register({
      name: name.value,
      email: email.value,
      password: password.value
    });
    loading.value = false;
    name.value = '';
    email.value = '';
    password.value = '';
    console.log(res);
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <MyInput v-model="name" type="text" label="Name" />
    <MyInput v-model="email" type="email" label="Email" />
    <MyInput v-model="password" type="password" label="Password" />

    <button :disabled="!isValid || loading">Submit</button>
  </form>
  <Loader v-if="loading">
    <template #text>
      <p>Loading...</p>
    </template>
  </Loader>
</template>