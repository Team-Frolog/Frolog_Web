const BASE_PATH = '/images';

interface Frog {
  [key: string]: {
    src: string;
    name: string;
  };
}

export const FROGS: Frog = {
  default: {
    src: `${BASE_PATH}/frog/character/default.svg`,
    name: '개꾸리',
  },
  fro: {
    src: `${BASE_PATH}/frog/character/fro.svg`,
    name: '프로',
  },
  roro: {
    src: `${BASE_PATH}/frog/character/roro.svg`,
    name: '로로',
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/rogy.svg`,
    name: '로기',
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
