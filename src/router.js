import { createRouter, createWebHistory } from 'vue-router';
import { AuthRoutes } from "./pages/auth/router";
import { BookRoutes } from "./pages/books/router";
import NotFound from "./pages/NotFound.vue"
import store from "./store.js";

const routes = [
  {
    path: "/",
    redirect: { name: "signin" },
  },
  { ...AuthRoutes },
  { ...BookRoutes },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async(to, _, next) => {
  !store.getters["auth/isAuthenticated"] && await store.dispatch("auth/tryLogin");
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next({ name: "signin" });
  } else if (to.meta.requiresUnAuth && store.getters["auth/isAuthenticated"]) {
    next("/books");
  } else {
    next();
  }
});

export default router;