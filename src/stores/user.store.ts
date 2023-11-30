import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "~/api/converts";
import { getCurrentUserApi, loginApi } from "~/api/user.api";

export const useUserStore = defineStore("user", () => {
  const emptyUserState: User = {
    id: 0,
    email: "",
    is_active: false,
    is_superuser: false,
    is_verified: false,
  };

  const user = ref(emptyUserState);

  const isLogin = computed(() => user.value.id !== 0);

  function logout() {
    user.value = emptyUserState;
    localStorage.removeItem("token");
  }

  async function login(username: string, password: string) {
    const token = (await loginApi(username, password)).data.access_token;
    localStorage.setItem("token", token);
    await getCurrentUserInfo();
  }

  async function getCurrentUserInfo() {
    if (localStorage.getItem("token")) {
      user.value = (await getCurrentUserApi()).data;
    }
  }

  return {
    user,
    isLogin,
    login,
    logout,
    getCurrentUserInfo,
  };
});
