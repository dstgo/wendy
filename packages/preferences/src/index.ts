import type { Preferences } from '@vben-core/preferences';
import type { DeepPartial } from '@vben-core/typings';

/**
 * 如果你想所有的app都使用相同的默认偏好设置，你可以在这里定义
 * 而不是去修改 @vben-core/preferences 中的默认偏好设置
 * @param preferences
 * @returns
 */

function defineOverridesPreferences(preferences: DeepPartial<Preferences>) {
  return {
    app: {
      enableCheckUpdates: false,
      name: 'Wendy Panel',
    },
    copyright: {
      companyName: 'dstgo',
      companySiteLink: 'https://github.com/dstgo',
    },
    theme: {
      radius: '0.25',
      semiDarkSidebar: false,
    },
    ...preferences,
  };
}

export { defineOverridesPreferences };

export * from '@vben-core/preferences';
