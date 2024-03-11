import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About Page",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/components/NotFoundError.vue'),
    meta: {
      hideComponents: true,
      title: "404 Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
