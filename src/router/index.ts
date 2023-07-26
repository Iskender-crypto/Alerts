import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/login/register',
      name: 'login-register',
      component: () => import('../views/login/register.vue'),
      meta:{
        layout:'login'
      }
    },
    {
      path: '/login/auth',
      name: 'login-auth',
      component: () => import('../views/login/auth.vue'),
      meta:{
        layout:'login'
      }
    }
  ]
})

export default router
