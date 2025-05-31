import { createApp } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// styles
import "@/assets/scss/main.scss";

// mounting point for the whole app
import App from "@/App.vue";

// router
import router from "./router";

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
