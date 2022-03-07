import { createWebHashHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: () => import("../components/Login")
  },
  {
    path: "/dashboard",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("../components/Dashboard")
  },
  {
    path: "/addSub",
    alias: "/addSub",
    name: "addSub",
    component: () => import("../components/AddSubject")
  },
  {
    path: "/subject_list",
    alias: "/subject_list",
    name: "subject_list",
    component: () => import("../components/Dashboard")
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;