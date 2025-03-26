import { createApp } from "vue";
import "./assets/css/index.css";
import App from "./App.vue";
import router from "./router.js";
import Lenis from "lenis";
import { MotionPlugin } from "@vueuse/motion";
import Clarity from "./plugins/clarity.js";

const app = createApp(App);

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

router.afterEach((to) => {
  window.gtag("config", "G-G2G9X0Y0DG", { page_path: to.fullPath });
});

// Animation loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

app.use(Clarity);
app.use(MotionPlugin);
app.use(router);
app.mount("#app");
