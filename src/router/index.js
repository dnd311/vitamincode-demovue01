import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import About from '@/views/About.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: () => import('../views/About.vue'),
    }
  ],
})

export default router
