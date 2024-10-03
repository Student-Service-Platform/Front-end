// 这是默认生成的路由管理文件
// 我未作大量修改

import { createRouter, createWebHistory } from 'vue-router'
import { testView, RegisterView, LoginView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: testView
    },
    {
      path: "/reg",
      component: RegisterView
    },
    {
      path: "/login",
      component: LoginView
    }
  ]
})

export default router
