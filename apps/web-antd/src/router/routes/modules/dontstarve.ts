import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'solar:home-outline',
      order: 20_000,
      title: $t('page.dontstarve.home.title'),
    },
    name: 'Home',
    path: '/home',
    redirect: '',
    children: [
      {
        name: 'DstHome',
        path: '',
        component: () => import('#/views/dontstarve/home/index.vue'),
        meta: {
          title: $t('page.dontstarve.home.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'mdi:console',
      order: 20_100,
      title: $t('page.dontstarve.console.title'),
    },
    name: 'Console',
    path: '/console',
    redirect: '',
    children: [
      {
        name: 'ConsoleHome',
        path: '',
        component: () => import('#/views/dontstarve/console/index.vue'),
        meta: {
          title: $t('page.dontstarve.console.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'majesticons:users-line',
      order: 20_200,
      title: $t('page.dontstarve.player.title'),
    },
    name: 'Player',
    path: '/player',
    redirect: '',
    children: [
      {
        name: 'PlayerHome',
        path: '',
        component: () => import('#/views/dontstarve/player/index.vue'),
        meta: {
          title: $t('page.dontstarve.player.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'mi:save',
      order: 20_300,
      title: $t('page.dontstarve.save.title'),
    },
    name: 'Save',
    path: '/save',
    redirect: '',
    children: [
      {
        name: 'SaveHome',
        path: '',
        component: () => import('#/views/dontstarve/save/index.vue'),
        meta: {
          icon: 'lucide:copyright',
          title: $t('page.dontstarve.save.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'mdi:steam',
      order: 20_400,
      title: $t('page.dontstarve.mod.title'),
    },
    name: 'Mod',
    path: '/mod',
    redirect: '',
    children: [
      {
        name: 'ModHome',
        path: '',
        component: () => import('#/views/dontstarve/mod/index.vue'),
        meta: {
          title: $t('page.dontstarve.mod.title'),
        },
      },
    ],
  },
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'ic:outline-watch-later',
      order: 20_500,
      title: $t('page.dontstarve.job.title'),
    },
    name: 'Job',
    path: '/job',
    redirect: '',
    children: [
      {
        name: 'JobHome',
        path: '',
        component: () => import('#/views/dontstarve/job/index.vue'),
        meta: {
          title: $t('page.dontstarve.job.title'),
        },
      },
    ],
  },
];

export default routes;
