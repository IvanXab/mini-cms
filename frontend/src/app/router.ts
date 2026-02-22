import { createWebHistory, createRouter } from "vue-router";
import { RoutesName } from "@/shared/common/routes.const.ts";
const MainPage = () => import("@/pages/main-page/MainPage.vue");

const routes = [
  {
    path: "/",
    name: RoutesName.MAIN,
    component: MainPage,
    children: [

    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});