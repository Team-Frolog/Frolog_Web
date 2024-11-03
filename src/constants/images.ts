const BASE_PATH = '/images';

export const IMAGES = {
  flash: {
    congrats: `${BASE_PATH}/frog/flash/congrats.webp`,
    new_well: `${BASE_PATH}/frog/flash/new-well-congrats.webp`,
    well_done: `${BASE_PATH}/frog/flash/well-done-frog.webp`,
    evaluation: {
      loading: `${BASE_PATH}/frog/flash/frog-evaluating.webp`,
      done: `${BASE_PATH}/frog/flash/frog-evaluating-done.webp`,
    },
  },
  frog: {
    fallback: {
      withPen: `${BASE_PATH}/frog/fallback/frog-with-pen.svg`,
      search: `${BASE_PATH}/frog/fallback/search-frog.svg`,
      no_review: `${BASE_PATH}/frog/fallback/no-review.svg`,
      empty_dot: `${BASE_PATH}/frog/fallback/frog-empty-dot.svg`,
    },
    first_congrats: `${BASE_PATH}/frog/first-review-congrats.svg`,
    add: {
      reading: `${BASE_PATH}/frog/frog-reading.svg`,
      done: `${BASE_PATH}/frog/frog-done.svg`,
    },
    memo_frog: `${BASE_PATH}/frog/memo-frog.svg`,
    more_feed: `${BASE_PATH}/frog/morefeed-frog.svg`,
    more_frogs: `${BASE_PATH}/frog/more-character-frog.svg`,
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
};
