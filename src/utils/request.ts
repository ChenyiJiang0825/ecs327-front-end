import Axios, { AxiosRequestConfig } from "axios";
import { useUserStore } from "@/stores/user.store";
import router from "@/router";
import { ElMessage } from "element-plus";

const request = Axios.create({
  timeout: 5000,
});

request.defaults.baseURL = import.meta.env.VITE_BASE_API;

request.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { Authorization: "Bearer " + token };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      if (code === 401) {
        ElMessage.error("Authorization expired, please log in again.");
        const userStore = useUserStore();
        userStore.logout();
        router.replace({
          path: "/login",
          query: { redirect: router.currentRoute.value.path },
        });
      } else if (code === 404) {
        ElMessage.error("The resource does not exist.");
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.detail
      ) {
        const msg = error.response.data.detail;
        if (msg === "LOGIN_BAD_CREDENTIALS") {
          ElMessage.error("Incorrect username or password.");
        } else if (msg === "REGISTER_USER_ALREADY_EXISTS") {
          ElMessage.error("The user already exists.");
        } else {
          ElMessage.error(msg);
        }
      } else {
        ElMessage.error("Unknown error");
      }
    } else {
      ElMessage.error("Unknown error");
    }
    return Promise.reject(error);
  }
);

export default request;
