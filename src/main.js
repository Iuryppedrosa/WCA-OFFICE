import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
export const eventBus = createApp({}); 

// views
import Landing from "./views/Landing.vue";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app
import App from "@/App.vue";

// routes
const routes = [
  {
    path: "/", 
    name: "Landing",
    component: Landing,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/", 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
