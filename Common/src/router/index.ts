// 这是默认生成的路由管理文件
// 我未作大量修改

import { createRouter, createWebHistory } from 'vue-router'
import {
  testView,
  RegisterView,
  LoginView,
  recordExpansion,
  viewRecordList,
  postRecord,
  adminCenterView,
  unprocessedFeedbackList,
  processedFeedbackList,
  spamFeedbackExpansion,
  spamFeedbackList,
  UserCenterView
} from '@/views'
import { loginGuard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      path: '/',
      component: testView
    },
    {
      name: 'register',
      path: '/reg',
      component: RegisterView
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    {
      name: 'user',
      path: '/user',
      component: UserCenterView
    },
    {
      name: 'record',
      path: '/user/post',
      component: postRecord
    },
    {
      name: 'view',
      path: '/user/list',
      component: viewRecordList
    },
    {
      name: 'admincenter',
      path: '/admin/',
      component: adminCenterView
    },
    {
      name: 'unprocessed',
      path: '/admin/unprocessed',
      component: unprocessedFeedbackList
    },
    {
      name: 'processed',
      path: '/admin/processed',
      component: processedFeedbackList
    },
    {
      name: 'spam',
      path: '/admin/spam',
      component: spamFeedbackList
    }
  ]
}) //.beforeEach(loginGuard)

export default router
