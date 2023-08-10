import { routes } from '@/app/router/routes'; // FIXME why eslint is not working? 'absolute-relative'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
