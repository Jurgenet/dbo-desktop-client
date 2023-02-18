import { RouteRecordRaw } from 'vue-router'

import { appConsts } from '@/app'

const routes: RouteRecordRaw[] = [
  {
    path: appConsts.ROUTES.ROOT,
    component: () => import('src/app/layouts/main-layout/index.vue'),
    children: [
      { path: '', component: () => import('src/app/pages/main-page.vue') },
      { path: appConsts.ROUTES.DUBUG, component: () => import('src/app/pages/debug-page.vue') },
      { path: appConsts.ROUTES.SETTINGS, component: () => import('src/app/pages/settings/index.vue') },
      { path: appConsts.ROUTES.SHOWROOM, component: () => import('src/app/pages/showroom-page.vue') },
      // db docs
      { path: appConsts.ROUTES.ACCOUNTS, component: () => import('src/app/pages/accounts/index.vue') },
      { path: appConsts.ROUTES.NOTES, component: () => import('src/app/pages/notes/index.vue') },
      { path: appConsts.ROUTES.ORDERS, component: () => import('src/app/pages/orders/index.vue') },
      { path: appConsts.ROUTES.KNOWLEDGES, component: () => import('src/app/pages/knowledges/index.vue') },
      { path: appConsts.ROUTES.PICTURES, component: () => import('src/app/pages/pictures/index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/app/pages/error404-page.vue'),
  },
]

export default routes
