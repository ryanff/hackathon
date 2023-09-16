import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home";
import { ROUTE_NAME } from "../config/enums";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: ROUTE_NAME.HOME,
    component: Home,
  },
  {
    path: "/list",
    name: ROUTE_NAME.LIST,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/list/List"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
