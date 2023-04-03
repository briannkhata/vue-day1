import { createRouter, createWebHistory } from "vue-router";
const router = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
    },
  ],
};
