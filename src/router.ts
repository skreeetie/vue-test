import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
import Settings from "./pages/Settings.vue";
import Todos from "./pages/Todos.vue";
import Auth from "./pages/Auth.vue";
import NotFound from "./pages/NotFound.vue";

const UserDetails = () => import("./pages/UserDetails.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/users", component: Users },
  { path: "/users/:id", component: UserDetails },
  {
    path: "/settings",
    component: Settings,
    beforeEnter: (to) => {
      if (to.query.admin !== "1") return "/";
    },
  },
  { path: "/todos", component: Todos },
  { path: "/auth", component: Auth },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
