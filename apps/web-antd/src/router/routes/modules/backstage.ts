import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  // 概览菜单
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: 10_000,
      title: $t('page.backstage.dashboard.title'),
    },
    name: 'Dashboard',
    path: '/',
    children: [
      {
        name: 'Analytics',
        path: '/analytics',
        component: () =>
          import('#/views/backstage/dashboard/analytics/index.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: $t('page.backstage.dashboard.analytics'),
        },
      },
      {
        name: 'Workspace',
        path: '/workspace',
        component: () =>
          import('#/views/backstage/dashboard/workspace/index.vue'),
        meta: {
          icon: 'icon-park-outline:workbench',
          title: $t('page.backstage.dashboard.workspace'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'lucide:network',
      order: 10_100,
      title: $t('page.backstage.node.title'),
    },
    name: 'Node',
    path: '/node',
    redirect: '',
    children: [
      {
        name: 'NodeHome',
        path: '',
        component: () => import('#/views/backstage/node/index.vue'),
        meta: {
          title: $t('page.backstage.node.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'teenyicons:docker-outline',
      order: 10_200,
      title: $t('page.backstage.image.title'),
    },
    name: 'Image',
    path: '/node',
    redirect: '',
    children: [
      {
        name: 'ImageHome',
        path: '',
        component: () => import('#/views/backstage/image/index.vue'),
        meta: {
          title: $t('page.backstage.image.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'lucide:server',
      order: 10_300,
      title: $t('page.backstage.server.title'),
    },
    name: 'Server',
    path: '/server',
    redirect: '',
    children: [
      {
        name: 'ServerHome',
        path: '',
        component: () => import('#/views/backstage/server/index.vue'),
        meta: {
          title: $t('page.backstage.server.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      icon: 'icon-park-outline:setting-two',
      order: 10_400,
      title: $t('page.backstage.system.title'),
    },
    name: 'System',
    path: '/system',
    redirect: '/system/account',
    children: [
      {
        name: 'Account',
        path: 'account',
        component: () => import('#/views/backstage/account/index.vue'),
        meta: {
          icon: 'mdi:shield-account-outline',
          title: $t('page.backstage.system.account.title'),
        },
      },
      {
        name: 'Notify',
        path: 'notify',
        component: () => import('#/views/backstage/notify/index.vue'),
        meta: {
          icon: 'tabler:mail-cog',
          title: $t('page.backstage.system.notify.title'),
        },
      },
      {
        name: 'Token',
        path: '',
        component: () => import('#/views/backstage/token/index.vue'),
        meta: {
          icon: 'majesticons:key-line',
          title: $t('page.backstage.system.token.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'lucide:copyright',
      order: 10_500,
      title: $t('page.vben.about'),
    },
    name: 'Project',
    path: '/project',
    redirect: '',
    children: [
      {
        name: 'ProjectAbout',
        path: '',
        component: () => import('#/views/_core/about/index.vue'),
        meta: {
          icon: 'lucide:copyright',
          title: $t('page.vben.about'),
        },
      },
    ],
  },
];

export default routes;
