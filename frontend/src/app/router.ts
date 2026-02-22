import { createWebHistory, createRouter } from "vue-router";
import {RoutesName, RoutesTitle} from "@/shared/common/routes.const.ts";
const MainPage = () => import("@/pages/main-page/MainPage.vue");
const ArticleEditorPage = () => import("@/pages/article-editor-page/ArticleEditorPage.vue");

const routes = [
  {
    path: "/",
    name: RoutesName.MAIN,
    component: MainPage,
    meta: {
      title: RoutesTitle.MAIN
    },
    children: [
      {
        path: "/article-editor",
        name: RoutesName.ARTICLE_EDITOR,
        component: ArticleEditorPage,
        meta: {
          title: RoutesTitle.ARTICLE_EDITOR
        },
      }
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});