<template>
  <div
    class="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800"
  >
    <div class="i-twemoji-face-with-tears-of-joy h-lg w-lg" />
    <h1 class="text-3xl font-semibold mt-5">Oops! Page not found.</h1>
    <p class="mt-2 text-lg">We can't find the page you're looking for.</p>
    <el-button type="primary" class="mt-5" @click="goHome">Go Home</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
