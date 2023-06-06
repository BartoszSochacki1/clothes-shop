import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/all",
      name: "all",
      component: HomeView,
    },
    {
      path: "/jeans",
      name: "jeans",
      component: HomeView,
    },
    {
      path: "/shirt",
      name: "shirt",
      component: HomeView,
    },
    {
      path: "/dress",
      name: "dress",
      component: HomeView,
    },
    {
      path: "/jumper",
      name: "jumper",
      component: HomeView,
    },
    {
      path: "/jacket",
      name: "jacket",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
