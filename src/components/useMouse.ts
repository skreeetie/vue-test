import { onMounted, onUnmounted, ref } from "vue"

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  const change = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => window.addEventListener('mousemove', change))
  onUnmounted(() => window.removeEventListener('mousemove', change))

  return {x, y}
}