const BASE_PATH = '/images';

interface Frog {
  [key: string]: {
    src: string;
    name: string;
    price: null | number;
  };
}

export const FROGS: Frog = {
  default: {
    src: `${BASE_PATH}/frog/character/sqaure/default-sqaure.svg`,
    name: '개꾸리',
    price: null,
  },
  fro: {
    src: `${BASE_PATH}/frog/character/sqaure/fro-sqaure.svg`,
    name: '프로',
    price: null,
  },
  roro: {
    src: `${BASE_PATH}/frog/character/sqaure/roro-sqaure.svg`,
    name: '로로',
    price: 50,
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/sqaure/rogy-sqaure.svg`,
    name: '로기',
    price: 100,
  },
  ghost: {
    src: `${BASE_PATH}/frog/character/sqaure/ghost-sqaure.svg`,
    name: '유령꾸리',
    price: 200,
  },
  mummy: {
    src: `${BASE_PATH}/frog/character/sqaure/mummy-sqaure.svg`,
    name: '미라꾸리',
    price: 200,
  },
  pumkin: {
    src: `${BASE_PATH}/frog/character/sqaure/pumkin-sqaure.svg`,
    name: '호박꾸리',
    price: 300,
  },
  skeleton: {
    src: `${BASE_PATH}/frog/character/sqaure/skeleton-sqaure.svg`,
    name: '해골꾸리',
    price: 300,
  },
  devil: {
    src: `${BASE_PATH}/frog/character/sqaure/devil-sqaure.svg`,
    name: '악마꾸리',
    price: 500,
  },
  gguristein: {
    src: `${BASE_PATH}/frog/character/sqaure/gguristein-sqaure.svg`,
    name: '꾸리슈타인',
    price: 500,
  },
  witch: {
    src: `${BASE_PATH}/frog/character/sqaure/witch-sqaure.svg`,
    name: '마녀꾸리',
    price: 1000,
  },
  dracula: {
    src: `${BASE_PATH}/frog/character/sqaure/dracula-sqaure.svg`,
    name: '꾸리백작',
    price: 1000,
  },
};

export const FROG_SITTING: {
  [key: string]: string;
} = {
  default: `${BASE_PATH}/frog/character/sitting/default-sitting.svg`,
  fro: `${BASE_PATH}/frog/character/sitting/fro-sitting.svg`,
  roro: `${BASE_PATH}/frog/character/sitting/roro-sitting.svg`,
  rogy: `${BASE_PATH}/frog/character/sitting/rogy-sitting.svg`,
};

export const SHEET_FROG = {
  error: `${BASE_PATH}/frog/sheet/frog-sheet-error.svg`,
  book: `${BASE_PATH}/frog/sheet/frog-with-book.svg`,
  wink: `${BASE_PATH}/frog/sheet/wink-frog.svg`,
  normal: `${BASE_PATH}/frog/sheet/frog-normal.svg`,
};
