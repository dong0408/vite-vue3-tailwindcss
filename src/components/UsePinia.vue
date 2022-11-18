<template>
  <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
  <div
    class="max-w-sm px-8 py-8 mx-auto space-y-2 bg-green-600 shadow-md rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
  >
    {{ userStore.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/store/user";
export default defineComponent({
  name: "UsePinia",
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
});
</script>
