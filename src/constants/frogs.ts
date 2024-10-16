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
