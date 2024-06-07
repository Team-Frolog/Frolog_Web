const BASE_PATH = '/icons';

export const ICONS = {
  common: {
    cancel: `${BASE_PATH}/common/x-icon.svg`,
    form: {
      backBtn: `${BASE_PATH}/common/form/back-btn.svg`,
      error: `${BASE_PATH}/common/form/error-icon.svg`,
      select: `${BASE_PATH}/common/form/select-icon.svg`,
    },
    check: {
      circle_checked: `${BASE_PATH}/common/check/circle-checked.svg`,
      circle_unchecked: `${BASE_PATH}/common/check/circle-uncheck.svg`,
    },
  },
  join: {
    lightOn: `${BASE_PATH}/joinPage/light-on.svg`,
    lightOff: `${BASE_PATH}/joinPage/light-off.svg`,
  },
} as const;
