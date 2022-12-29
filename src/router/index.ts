import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/ReportstView.vue"),
    },
    {
      path: "/vuebasic",
      name: "vue basic",
      component: () => import("../views/vueBasic/VueBassicView.vue"),
      children: [
        {
          path: "vuebasic1",
          name: "vue basic 1",
          component: () => import("../views/vueBasic/VueBassic1View.vue"),
        }
      ]
    }
  ],
});

export default router;
