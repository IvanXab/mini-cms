import { createApp } from "vue";
import { router } from "@/app/router.ts";
import App from "@/app/App.vue";
import "@/app/assets/styles/index.scss";

createApp(App)
  .use(router)
  .mount('#app');