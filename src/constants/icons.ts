const BASE_PATH = '/icons';

export const ICONS = {
  common: {
    back: {
      back_500: `${BASE_PATH}/common/back/back-500.svg`,
      back_600: `${BASE_PATH}/common/back/back-600.svg`,
    },
    cancel: `${BASE_PATH}/common/x-icon.svg`,
    form: {
      error: `${BASE_PATH}/common/form/error-icon.svg`,
      select: `${BASE_PATH}/common/form/select-icon.svg`,
    },
    check: {
      circle_checked: `${BASE_PATH}/common/check/circle-checked.svg`,
      circle_unchecked: `${BASE_PATH}/common/check/circle-uncheck.svg`,
    },
  },
  join: {
    light: `${BASE_PATH}/joinPage/light.svg`,
  },
} as const;
