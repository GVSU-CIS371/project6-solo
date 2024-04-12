import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Clothing from "./components/Clothing.vue";
import Electronics from "./components/Electronics.vue";
import Groceries from "./components/Groceries.vue";
import BestSeller from "./components/BestSeller.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: Home,
  },
  {
    path: "/bestSeller",
    name: "bestSeller",
    props: true,
    component: BestSeller,
  },
  {
    path: "/clothing",
    name: "clothing",
    props: true,
    component: Clothing,
  },
  {
    path: "/electronics",
    name: "electronics",
    props: true,
    component: Electronics,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: Groceries,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
