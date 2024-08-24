import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      hideInMenu: true,
      order: 30_000,
      title: $t('page.user.privacy.title'),
    },
    name: 'User',
    path: '/user',
    redirect: '/user/privacy',
    children: [
      {
        name: 'UserPrivacy',
        path: 'privacy',
        component: () => import('#/views/user/privacy/index.vue'),
        meta: {
          title: $t('page.user.privacy.title'),
        },
      },
    ],
  },
];

export default routes;
