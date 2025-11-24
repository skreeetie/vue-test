<script setup lang="ts">
const props = defineProps(["modelValue", 'label']);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    v-bind="$attrs"
  />
</template>
