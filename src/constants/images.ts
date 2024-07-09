const BASE_PATH = '/images';

export const IMAGES = {
  frog: {
    finish: `${BASE_PATH}/frog/finish.svg`,
    evaluation: {
      loading: `${BASE_PATH}/frog/frog-evaluating.svg`,
      done: `${BASE_PATH}/frog/frog-evaluating-done.svg`,
    },
    sitting: `${BASE_PATH}/frog/frog-sitting.svg`,
    sheet: {
      error: `${BASE_PATH}/frog/sheet/frog-sheet-error.svg`,
    },
  },
  test: {
    shape: {
      '1': `${BASE_PATH}/test/shape/type1.svg`,
      '2': `${BASE_PATH}/test/shape/type2.svg`,
      '3': `${BASE_PATH}/test/shape/type3.svg`,
    },
    frog: {
      '1': `${BASE_PATH}/test/frog/type1.svg`,
      '2': `${BASE_PATH}/test/frog/type2.svg`,
      '3': `${BASE_PATH}/test/frog/type3.svg`,
    },
  },
  well: {
    header: `${BASE_PATH}/well/well-header.svg`,
  },
  book: {
    background: `${BASE_PATH}/book/book-bg.svg`,
    skin: `${BASE_PATH}/book/book-skin.svg`,
  },
  ground: `${BASE_PATH}/etc/ground.svg`,
};
