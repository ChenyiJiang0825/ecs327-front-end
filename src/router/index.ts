import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import ErrorPage from "@/views/ErrorPage.vue";
import Layout from "@/components/Layout.vue";
import HomePage from "@/views/HomePage.vue";

export const HIDDEN_ROUTES = ["/:pathMatch(.*)*", "/404", "/redirect"];

type CustomRouteRecordRaw = RouteRecordRaw & {
  icon: string;
};

// @unocss-include
export const routes: CustomRouteRecordRaw[] = [
  {
    name: "Redirect",
    path: "/redirect",
    icon: "i-mdi-login",
    component: Layout,
    children: [
      {
        name: "RedirectItem",
        path: "/redirect/:path(.*)",
        component: () => import("@/views/Redirect.vue"),
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    icon: "i-mdi-login",
  },
  {
    path: "/404",
    component: ErrorPage,
    name: "NotFound",
    icon: "i-twemoji:face-with-tears-of-joy",
  },
  {
    name: "Home",
    path: "/",
    icon: "i-mdi-home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: HomePage,
        name: "HomePage",
      },
    ],
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: "i-mdi:table",
    component: Layout,
    redirect: "/schedule-page",
    children: [
      {
        path: "/schedule-page",
        component: () => import("@/views/SchedulePage.vue"),
        name: "SchedulePage",
      },
    ],
  },
  {
    name: "CurrentSchedule",
    path: "/currentschedule",
    icon: "i-mdi:table",
    component: Layout,
    redirect: "/currentschedule-page",
    children: [
      {
        path: "/currentschedule-page",
        component: () => import("@/views/CurrentSchedule.vue"),
        name: "CurrentSchedule",
      },
    ],
  },
  {
    name: "Test",
    path: "/test",
    icon: "i-mdi:table",
    component: Layout,
    redirect: "/test-page",
    children: [
      {
        path: "/test-page",
        component: () => import("@/views/TestPage.vue"),
        name: "TestPage",
      },
    ],
  },
  {
    name: "ProfilePage",
    path: "/profilePage",
    icon: "i-iconoir:profile-circle",
    component: Layout,
    redirect: "/profile-page",
    children: [
      {
        path: "/profile-page",
        component: () => import("@/views/ProfilePage.vue"),
        name: "ProfilePage",
      },
    ],
  },
  {
    name: "NewProfile",
    path: "/newprofile",
    icon: "i-iconoir:profile-circle",
    component: Layout,
    redirect: "/newprofile-page",
    children: [
      {
        path: "/newprofile-page",
        component: () => import("@/views/NewProfile.vue"),
        name: "NewProfile",
      },
    ],
  },
  {
    name: "404",
    icon: "i-twemoji-face-with-tears-of-joy",
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
