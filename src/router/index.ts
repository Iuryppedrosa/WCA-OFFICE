import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
