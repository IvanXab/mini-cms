import { createApp } from "vue";
import { router } from "@/app/router.ts";
import Main from "@/app/Main.vue";
import "@/app/assets/styles/index.scss";

createApp(Main)
  .use(router)
  .mount('#app');