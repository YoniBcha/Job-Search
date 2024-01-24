import { createRouter, createWebHistory } from "vue-router";
import mainNav from "../components/mainNav.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: mainNav,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
