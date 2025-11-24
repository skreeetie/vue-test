<script setup lang="ts">
  import { inject, onMounted, onUnmounted, watchEffect } from 'vue';
  import { useMouse } from './useMouse';
  import { useWindowSize } from './useWindowSize';

  const {x, y} = useMouse();
  const {width, height} = useWindowSize();
  const browser = inject('browser')

  watchEffect(() => {
    console.log(`width у window изменился: ${width.value}`)
  })
  onMounted(() => {
    console.log('mounted')
  });
  onUnmounted(() => {
    console.log('unmounted')
  })
</script>

<template>
  <div>
    <p>Mouse: {{ `${x} ${y}` }}</p>
    <p>Window: {{ `${width} ${height}` }}</p>
    <p>Browser: {{ browser }}</p>
  </div>
</template>