import { createApp } from "vue";
import * as VueRouter from "vue-router";
import "./style.css";
import App from "./App.vue";

import home from "./pages/home.vue";
import produkte from "./pages/produkte.vue";
import kontakt from "./pages/kontakt.vue";
import dienstleistungen from "./pages/dienstleistungen.vue";
import wir from "./pages/wir.vue";
import impressum from "./pages/impressum.vue";
import unknownPage from "./pages/unknownPage.vue";
import dashboard from "./pages/dashboard.vue";
import login from "./pages/login.vue";

const routes = [
  { path: "/", component: home },
  { path: "/produkte", component: produkte },
  { path: "/kontakt", component: kontakt },
  { path: "/dienstleistungen", component: dienstleistungen },
  { path: "/wir", component: wir },
  { path: "/impressum", component: impressum },
  { path: "/dashboard", component: dashboard },
  { path: "/login", component: login },
  { path: "/:pathMatch(.*)*", component: unknownPage },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
