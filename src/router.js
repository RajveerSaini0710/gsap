import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () => import("./pages/HomePage.vue"),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("./pages/ContactUsPage.vue"),
    },
  ],
});

export default router;
