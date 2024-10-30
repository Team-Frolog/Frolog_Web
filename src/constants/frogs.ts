const BASE_PATH = '/images';

interface Frog {
  [key: string]: {
    src: string;
    name: string;
  };
}

export const FROGS: Frog = {
  default: {
    src: `${BASE_PATH}/frog/character/square/default-square.svg`,
    name: '개꾸리',
  },
  fro: {
    src: `${BASE_PATH}/frog/character/square/fro-square.svg`,
    name: '프로',
  },
  roro: {
    src: `${BASE_PATH}/frog/character/square/roro-square.svg`,
    name: '로로',
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/square/rogy-square.svg`,
    name: '로기',
  },
  ghost: {
    src: `${BASE_PATH}/frog/character/square/ghost-square.svg`,
    name: '유령꾸리',
  },
  mummy: {
    src: `${BASE_PATH}/frog/character/square/mummy-square.svg`,
    name: '미라꾸리',
  },
  pumkin: {
    src: `${BASE_PATH}/frog/character/square/pumkin-square.svg`,
    name: '호박꾸리',
  },
  skeleton: {
    src: `${BASE_PATH}/frog/character/square/skeleton-square.svg`,
    name: '해골꾸리',
  },
  devil: {
    src: `${BASE_PATH}/frog/character/square/devil-square.svg`,
    name: '악마꾸리',
  },
  gguristein: {
    src: `${BASE_PATH}/frog/character/square/gguristein-square.svg`,
    name: '꾸리슈타인',
  },
  witch: {
    src: `${BASE_PATH}/frog/character/square/witch-square.svg`,
    name: '마녀꾸리',
  },
  dracula: {
    src: `${BASE_PATH}/frog/character/square/dracula-square.svg`,
    name: '꾸리백작',
  },
} as const;

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
