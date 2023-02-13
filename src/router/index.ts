import { Global } from "@/stores/globals";
import { User } from "@/stores/user";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/LoginView.vue"),
    meta: {
      requireAuth: false,
      layout: "none",
    },
  },
  {
    path: "/home/dashboard",
    name: "dashboard",
    component: () => import("../views/home/DashboardCarousel.vue"),
    meta: {
      requireAuth: false,
      layout: "default",
    },
  },
  {
    path: "/home/TestView1",
    name: "TestView1",
    component: () => import("../views/home/TestView1.vue"),
    meta: {
      requireAuth: false,
      layout: "default",
    },
  },
  {
    path: "/home/TestView2",
    name: "TestView2",
    component: () => import("../views/home/TestView2.vue"),
    meta: {
      requireAuth: false,
      layout: "default",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

// "MIDDLEWARE"
router.beforeEach((to, from, next) => {
  if (to.meta.layout && typeof to.meta.layout == "string") {
    Global.currentLayout = to.meta.layout;
  }
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
