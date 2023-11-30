<template>
  <!-- Container -->
  <div
    class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200"
  >
    <!-- Login component -->
    <div class="flex shadow-md">
      <!-- Login form -->
      <div
        class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
        style="width: 24rem; height: 32rem"
      >
        <div class="w-72">
          <!-- Heading -->
          <h1 class="text-xl font-semibold flex justify-center items-end">
            <div class="i-mdi:table-check inline-block mr-1"></div>
            Course Scheduler
          </h1>

          <small v-if="isLogin" class="text-gray-400">
            Welcome back! Please enter your details
          </small>
          <small v-else class="text-gray-400">
            Please enter your personal details and start journey with us
          </small>

          <div class="text-center">
            <input
              v-model="username"
              type="text"
              placeholder="email"
              class="input-text"
            />
            <input
              v-model="password"
              type="password"
              placeholder="password"
              class="input-text"
            />
            <button v-if="isLogin" @click="login" class="btn-blue">
              Sign In
            </button>
            <button v-else @click="register" class="btn-yellow">Sign Up</button>
            <div class="flex justify-center items-center mt-4">
              <span v-if="isLogin"> Don't have an account? </span>
              <span v-else> Already have an account? </span>
              <el-button
                @click="toggle"
                class="ml-2 inline-block"
                size="small"
                :type="isLogin ? 'warning' : 'info'"
              >
                {{ isLogin ? "Sign Up" : "Sign In" }}
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Login banner -->
      <div
        class="flex flex-wrap content-center justify-center rounded-r-md"
        style="height: 32rem"
      >
        <img
          class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
          src="groot.jpg"
        />
      </div>
    </div>

    <!-- Credit -->
    <div class="mt-3 w-full">
      <p class="text-center">Made by DJ, WZA ...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user.store";
import { ElMessage } from "element-plus";
import { registerApi } from "~/api/user.api";
import router from "~/router";

const userStore = useUserStore();
const isLogin = ref(true);
const username = ref("");
const password = ref("");

async function login() {
  try {
    await userStore.login(username.value, password.value);
    ElMessage.success(`Welcome back, ${userStore.user.email}!`);
    router.push("/");
  } catch (error: any) {
    console.error(error.response.data);
  }
}

async function register() {
  try {
    await registerApi(username.value, password.value);
    ElMessage.success(`Welcome, ${username.value}! Please login.`);
    toggle();
  } catch (error) {
    console.error(error);
  }
}

const toggle = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
.container {
  background-color: #f7f7f7;
}

.curved-edge {
  clip-path: ellipse(50% 100% at 100% 50%);
}

.input-text {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-blue {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-yellow {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #f59e0b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
