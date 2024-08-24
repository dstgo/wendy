import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    authPageLayout: 'panel-center',
    enablePreferences: false,
    // loginExpiredMode 枚举值只能是page，不然在token过期时无法正常跳转
    loginExpiredMode: 'page',
    name: import.meta.env.VITE_APP_TITLE,
  },
});
