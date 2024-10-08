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
  unrocessedFeedbackExpansion,
  suUnprocessedFeedbackList,
  suProccessedFeedbackList,
  suProcessedFeedbackExpansion,
  suSpamFeedbacklist,
  suSpamReview,
  userManagementList,
  adminManagementList,
  largeScreen
} from '@/views'
import { AdminGuard, SuperGuard, UserGuard } from './guard'

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
      component: postRecord,
      beforeEnter: UserGuard
    },
    {
      name: 'view',
      path: '/user/list',
      component: viewRecordList,
      beforeEnter: UserGuard
    },
    {
      name: 'exp',
      path: '/user/list/',
      component: recordExpansion,
      beforeEnter: UserGuard
    },
    {
      name: 'admincenter',
      path: '/admin/',
      component: adminCenterView,
      beforeEnter: AdminGuard
    },
    {
      name: 'unprocessed',
      path: '/admin/unprocessed',
      component: unprocessedFeedbackList,
      beforeEnter: AdminGuard
    },
    {
      name: 'unExp',
      path: '/admin/unprocessed/',
      component: unrocessedFeedbackExpansion,
      beforeEnter: AdminGuard
    },
    {
      name: 'processed',
      path: '/admin/processed',
      component: processedFeedbackList,
      beforeEnter: AdminGuard
    },
    {
      name: 'proExp',
      path: '/admin/processed/',
      component: processedFeedbackExpansion,
      beforeEnter: AdminGuard
    },
    {
      name: 'spam',
      path: '/admin/spam',
      component: spamFeedbackList,
      beforeEnter: AdminGuard
    },
    {
      name: 'spamExp',
      path: '/admin/spam/',
      component: spamFeedbackExpansion,
      beforeEnter: AdminGuard
    },
    {
        name:'passwordreset',
        path: '/resetpwd',
        component: PasswordResetView
    },
    {
      name: "suProList",
      path: "/superadmin/processed",
      component: suProccessedFeedbackList,
      beforeEnter: SuperGuard
    }
    ,
    {
      name: "suProExp",
      path: "/superadmin/processed/",
      component: suProcessedFeedbackExpansion,
      beforeEnter: SuperGuard
    }
    ,
    {
      name: "suUnList",
      path: "/superadmin/unprocessec",
      component: suUnprocessedFeedbackList,
      beforeEnter: SuperGuard
    }
    ,
    {
      name: "suUnExp",
      path: "/superadmin/unprocessed/",
      component: suUnprocessedFeedbackList,
      beforeEnter: SuperGuard
    },
    {
      name: "suSpamList",
      path: "/superadmin/spam",
      component: suSpamFeedbacklist,
      beforeEnter: SuperGuard
    },
    {
      name: "suSpamExp",
      path: "/superadmin/spam/",
      component: suSpamReview,
      beforeEnter: SuperGuard
    },
    {
      name: "userManage",
      path: "/superadmin/manage/user",
      component: userManagementList,
      beforeEnter: SuperGuard
    },
    {
      name: "userManage",
      path: "/superadmin/manage/admin",
      component: adminManagementList,
      beforeEnter: SuperGuard
    },
    {
      name: "screen",
      path: "/superadmin/",
      component: largeScreen,
      beforeEnter: SuperGuard
    }
    

  ]
})

export default router
