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
  UserCenterView,
  PasswordResetView,
  processedFeedbackExpansion,
  unrocessedFeedbackExpansion
} from '@/views'
import { UserGuard } from './guard'

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
      component: UserCenterView,
      beforeEnter: UserGuard
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
      name: 'exp',
      path: '/user/list/',
      component: recordExpansion
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
      name: 'unExp',
      path: '/admin/unprocessed/',
      component: unrocessedFeedbackExpansion
    },
    {
      name: 'processed',
      path: '/admin/processed',
      component: processedFeedbackList
    },
    {
      name: 'proExp',
      path: '/admin/processed/',
      component: processedFeedbackExpansion
    },
    {
      name: 'spam',
      path: '/admin/spam',
      component: spamFeedbackList
    },
    {
        name:'passwordreset',
        path: '/resetpwd',
        component: PasswordResetView
    }
  ]
}) //.beforeEach(loginGuard)

export default router
