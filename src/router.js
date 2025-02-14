import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/HomePage.vue"),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("./pages/ContactUsPage.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("./pages/AboutUsPage.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: () => import("./pages/ServicePage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // When navigating back, restore the saved scroll position
      return savedPosition;
    } else {
      // For new pages, scroll to the top
      return { top: 0 };
    }
  },
});

export default router;
