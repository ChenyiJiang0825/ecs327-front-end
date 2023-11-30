import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCountStore = defineStore("counter", () => {
  const count = ref(0);
  const age = ref("WZA");
  const doubleAge = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name: age, doubleCount: doubleAge, increment };
});
