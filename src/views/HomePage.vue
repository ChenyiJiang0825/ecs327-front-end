<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
const userStore = useUserStore();
userStore.getCurrentUserInfo();
</script>
