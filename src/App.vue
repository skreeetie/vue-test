<!-- <script setup lang="ts">
  import { provide } from 'vue';
  import FirstPractive from './components/FirstPractive.vue';
  import HelloWorld from './components/HelloWorld.vue'
  import SecondPractice from './components/SecondPractice.vue';

  provide('browser', 'firefox')
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <FirstPractive />
  <SecondPractice />
</template> -->

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const goToSettings = () => {
    router.push('/settings')
  }
</script>

<template>
  <RouterView />
  <button @click="goToSettings">Go to settings</button>
</template>