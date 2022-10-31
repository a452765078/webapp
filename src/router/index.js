import { createRouter, createWebHashHistory } from 'vue-router'
// import Recommend from '@/views/Recommend.vue'

const routes = [
  {
    path: '/',
    name: 'recommend',
    component: () => import('@/views/Recommend.vue')
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('@/views/Singer.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
