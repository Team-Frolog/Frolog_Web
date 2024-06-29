const BASE_PATH = '/images';

export const IMAGES = {
  frog: {
    finish: `${BASE_PATH}/frog/finish.svg`,
    evaluation: {
      loading: `${BASE_PATH}/frog/frog-evaluating.svg`,
      done: `${BASE_PATH}/frog/frog-evaluating-done.svg`,
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
  ground: `${BASE_PATH}/etc/ground.svg`,
};
