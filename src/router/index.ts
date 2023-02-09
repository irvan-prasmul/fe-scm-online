import { User } from "@/stores/user";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/LoginView.vue"),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/home/dashboard",
    name: "dashboard",
    component: () => import("../views/home/DashboardView.vue"),
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

// "MIDDLEWARE"
router.beforeEach((to, from, next) => {
  const isAuth: boolean = User.isAuth();
  console.log("beforeEach");
  if (to.path == "/") {
    next({ name: "login" });
  } else next();
  // else if (to.meta.requireAuth) {
  //   if (isAuth) next();
  //   else next({ name: "login" });
  // } else if (to.meta.authPage) {
  //   if (isAuth == false) next();
  //   else next({ name: "dashboard" });
  // } else {
  //   next({ name: "login" });
  // }
});

export default router;
