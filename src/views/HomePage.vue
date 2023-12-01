<template>
  <div>
    <div v-if="userStore.isLogin" align="left" class="ml-30px">
      Hello, {{ userStore.user.email }}
    </div>
    <div v-else>Please sign in first!</div>
    <h1>Home Page</h1>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
const userStore = useUserStore();
userStore.getCurrentUserInfo();
</script>
