import { createApp } from "vue";
import "./assets/css/index.css";
import App from "./App.vue";
import router from "./router.js";
import Lenis from "lenis";

const app = createApp(App);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

// Animation loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

app.use(router);
app.mount("#app");
