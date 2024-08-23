import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

// views
import Landing from "./views/Landing.vue";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";

// mounting point for the whole app
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

const app = createApp(App);
app.use(router);

// Initialize AOS
app.mixin({
  mounted() {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      mirror: false,
    });
  },
});

app.mount("#app");
