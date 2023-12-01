import { apiPath, User, apiType } from "./converts";
import request from "~/utils/request";

const ENDPOINTS = {
  LOGIN: <apiPath>"/auth/jwt/login",
  REGISTER: <apiPath>"/auth/register",
  GET_USER: <apiPath>"/users/",
  GET_CURRENT_USER: <apiPath>"/users/me",
};

export function loginApi(username: string, password: string) {
  localStorage.removeItem("token");
  return request.postForm<apiType["BearerResponse"]>("/auth/jwt/login", {
    username,
    password,
  });
}

export function registerApi(email: string, password: string) {
  return request.post<User>(ENDPOINTS.REGISTER, { email, password });
}

export function getUserApi(id: number) {
  return request.get<User>(ENDPOINTS.GET_CURRENT_USER + id);
}

export function getCourseInfoApi() {
  return request.get<any>("/course-info");
}

export function getCurrentUserApi() {
  return request.get<User>(ENDPOINTS.GET_CURRENT_USER);
}
