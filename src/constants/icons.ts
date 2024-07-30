const BASE_PATH = '/icons';

export const ICONS = {
  common: {
    navigation: {
      well: `${BASE_PATH}/common/navigation/well-icon.svg`,
      feed: `${BASE_PATH}/common/navigation/feed-icon.svg`,
      search: `${BASE_PATH}/common/navigation/search-icon.svg`,
      profile: `${BASE_PATH}/common/navigation/profile-icon.svg`,
    },
    back: `${BASE_PATH}/common/back/back.svg`,
    cancel: `${BASE_PATH}/common/x-icon.svg`,
    form: {
      error: `${BASE_PATH}/common/form/error-icon.svg`,
      select: `${BASE_PATH}/common/form/select-icon.svg`,
    },
    check: {
      circle_checked: `${BASE_PATH}/common/check/circle-checked.svg`,
      circle_unchecked: `${BASE_PATH}/common/check/circle-uncheck.svg`,
    },
    add: `${BASE_PATH}/common/add-icon.svg`,
  },
  feed: {
    menu: `${BASE_PATH}/feed/feed-menu.svg`,
  },
  expand: `${BASE_PATH}/newReviewPage/expand.svg`,
  well: {
    arrow: `${BASE_PATH}/wellPage/circle-arrow.svg`,
    plus: `${BASE_PATH}/wellPage/circle-plus.svg`,
    edit: `${BASE_PATH}/wellPage/well-edit.svg`,
  },
  join: {
    light: `${BASE_PATH}/joinPage/light.svg`,
  },
  test: {
    download: `${BASE_PATH}/testPage/download-icon.svg`,
    download_done: `${BASE_PATH}/testPage/download-done.svg`,
  },
} as const;
