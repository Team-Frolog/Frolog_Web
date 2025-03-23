const BASE_PATH = '/images';

export const IMAGES = {
  flash: {
    light: `${BASE_PATH}/flash/light.webp`,
    congrats: `${BASE_PATH}/frog/flash/congrats.webp`,
    new_well: `${BASE_PATH}/frog/flash/new-well-congrats.webp`,
    well_done: `${BASE_PATH}/frog/flash/well-done-frog.webp`,
    first_memo: `${BASE_PATH}/frog/flash/first-memo-congrats.webp`,
    evaluation: {
      loading: `${BASE_PATH}/frog/flash/frog-evaluating.webp`,
      done: `${BASE_PATH}/frog/flash/frog-evaluating-done.webp`,
    },
    unsubscribe: `${BASE_PATH}/frog/flash/unsubscribe-frog.webp`,
  },
  frog: {
    fallback: {
      withPen: `${BASE_PATH}/frog/fallback/frog-with-pen.webp`,
      search: `${BASE_PATH}/frog/fallback/search-frog.webp`,
      no_review: `${BASE_PATH}/frog/fallback/no-review.webp`,
      empty_dot: `${BASE_PATH}/frog/fallback/frog-empty-dot.webp`,
      error_page: `${BASE_PATH}/frog/fallback/error-frog.webp`,
      notfound_page: `${BASE_PATH}/frog/fallback/not-found-frog.webp`,
    },
    first_congrats: `${BASE_PATH}/frog/first-review-congrats.svg`,
    reading: {
      before: `${BASE_PATH}/frog/book/before-reading.svg`,
      after: `${BASE_PATH}/frog/book/after-reading.svg`,
    },
    memo_frog: `${BASE_PATH}/frog/memo-frog.webp`,
    first_memo_frog: `${BASE_PATH}/frog/first-memo-frog.webp`,
    more_feed: `${BASE_PATH}/frog/morefeed-frog.svg`,
    more_frogs: `${BASE_PATH}/frog/more-character-frog.svg`,
    mission_frog: `${BASE_PATH}/frog/mission-frog.svg`,
    first_memo_banner: `${BASE_PATH}/frog/first-memo-form-banner.svg`,
  },
  test: {
    result: {
      '1': `${BASE_PATH}/test/type1.svg`,
      '2': `${BASE_PATH}/test/type2.svg`,
      '3': `${BASE_PATH}/test/type3.svg`,
    },
  },
  book: {
    background: `${BASE_PATH}/book/book-bg.svg`,
    skin: `${BASE_PATH}/book/book-skin.svg`,
    cover: `${BASE_PATH}/book/book-cover.svg`,
  },
  well: {
    leaf: `${BASE_PATH}/well/well-leaf.svg`,
  },
  ground: `${BASE_PATH}/etc/ground.webp`,
  ground_sm: `${BASE_PATH}/etc/ground-sm.webp`,
  default_profile: `${BASE_PATH}/etc/default-profile.svg`,
} as const;
