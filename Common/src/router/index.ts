// 这是默认生成的路由管理文件
// 我未作大量修改

import { createRouter, createWebHistory } from 'vue-router'
import { testView, RegisterView, LoginView, recordExpansion, viewRecordList } from '@/views'
import { loginGuard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "index",
      path: "/",
      component: testView
    },
    {
      name: "register",
      path: "/reg",
      component: RegisterView
    },
    {
      name: "login",
      path: "/login",
      component: LoginView
    },
    {
      name: "record",
      path: "/feedback/post",
      component: recordExpansion,
    },
    {
      name: "view",
      path: "/feedback/list",
      component: viewRecordList
    }
  ]
})//.beforeEach(loginGuard)

export default router
