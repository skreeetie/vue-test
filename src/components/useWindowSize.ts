import { onMounted, onUnmounted, ref } from "vue"

export const useWindowSize = () => {
  const width = ref(0);
  const height = ref(0);

  const change = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => window.addEventListener('resize', change));
  onUnmounted(() => window.removeEventListener('resize', change))

  return {width, height}
}