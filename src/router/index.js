import { createRouter, createWebHistory } from "vue-router";


import EncryptionApplication from "@/views/MainPage/TheEncryptionApplication.vue";



const routes = [
  {
    path: "/",
    name: "EncryptionApplication",
    component: EncryptionApplication,
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
