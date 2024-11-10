const BASE_PATH = '/images';

interface Frog {
  [key: string]: {
    src: string;
    name: string;
    marginBottom: number;
  };
}

export const FROGS: Frog = {
  default: {
    src: `${BASE_PATH}/frog/character/square/default-square.svg`,
    name: '개꾸리',
    marginBottom: 0,
  },
  fro: {
    src: `${BASE_PATH}/frog/character/square/fro-square.svg`,
    name: '프로',
    marginBottom: 0,
  },
  roro: {
    src: `${BASE_PATH}/frog/character/square/roro-square.svg`,
    name: '로로',
    marginBottom: 0,
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/square/rogy-square.svg`,
    name: '로기',
    marginBottom: 0,
  },
  ghost: {
    src: `${BASE_PATH}/frog/character/square/ghost-square.svg`,
    name: '유령꾸리',
    marginBottom: 0,
  },
  mummy: {
    src: `${BASE_PATH}/frog/character/square/mummy-square.svg`,
    name: '미라꾸리',
    marginBottom: 0,
  },
  pumpkin: {
    src: `${BASE_PATH}/frog/character/square/pumpkin-square.svg`,
    name: '호박꾸리',
    marginBottom: 0,
  },
  skeleton: {
    src: `${BASE_PATH}/frog/character/square/skeleton-square.svg`,
    name: '해골꾸리',
    marginBottom: 0,
  },
  devil: {
    src: `${BASE_PATH}/frog/character/square/devil-square.svg`,
    name: '악마꾸리',
    marginBottom: 0,
  },
  gguristein: {
    src: `${BASE_PATH}/frog/character/square/gguristein-square.svg`,
    name: '꾸리슈타인',
    marginBottom: 0,
  },
  witch: {
    src: `${BASE_PATH}/frog/character/square/witch-square.svg`,
    name: '마녀꾸리',
    marginBottom: 20,
  },
  dracula: {
    src: `${BASE_PATH}/frog/character/square/dracula-square.svg`,
    name: '꾸리백작',
    marginBottom: 10,
  },
} as const;

export const FROGS_SILHOUETTE: {
  [key: string]: string;
} = {
  roro: `${BASE_PATH}/frog/character/silhouette/roro-silhouette.svg`,
  rogy: `${BASE_PATH}/frog/character/silhouette/rogy-silhouette.svg`,
  ghost: `${BASE_PATH}/frog/character/silhouette/ghost-silhouette.svg`,
  mummy: `${BASE_PATH}/frog/character/silhouette/mummy-silhouette.svg`,
  pumpkin: `${BASE_PATH}/frog/character/silhouette/pumpkin-silhouette.svg`,
  skeleton: `${BASE_PATH}/frog/character/silhouette/skeleton-silhouette.svg`,
  devil: `${BASE_PATH}/frog/character/silhouette/devil-silhouette.svg`,
  gguristein: `${BASE_PATH}/frog/character/silhouette/gguristein-silhouette.svg`,
  witch: `${BASE_PATH}/frog/character/silhouette/witch-silhouette.svg`,
  dracula: `${BASE_PATH}/frog/character/silhouette/dracula-silhouette.svg`,
};

export const FROGS_FIT: {
  [key: string]: string;
} = {
  default: `${BASE_PATH}/frog/character/fit/default.svg`,
  fro: `${BASE_PATH}/frog/character/fit/fro.svg`,
  roro: `${BASE_PATH}/frog/character/fit/roro.svg`,
  rogy: `${BASE_PATH}/frog/character/fit/rogy.svg`,
  ghost: `${BASE_PATH}/frog/character/fit/ghost.svg`,
  mummy: `${BASE_PATH}/frog/character/fit/mummy.svg`,
  pumpkin: `${BASE_PATH}/frog/character/fit/pumpkin.svg`,
  skeleton: `${BASE_PATH}/frog/character/fit/skeleton.svg`,
  devil: `${BASE_PATH}/frog/character/fit/devil.svg`,
  gguristein: `${BASE_PATH}/frog/character/fit/gguristein.svg`,
  witch: `${BASE_PATH}/frog/character/fit/witch.svg`,
  dracula: `${BASE_PATH}/frog/character/fit/dracula.svg`,
};

export const SHEET_FROG = {
  error: `${BASE_PATH}/frog/sheet/frog-sheet-error.svg`,
  book: `${BASE_PATH}/frog/sheet/frog-with-book.svg`,
  wink: `${BASE_PATH}/frog/sheet/wink-frog.svg`,
  normal: `${BASE_PATH}/frog/sheet/frog-normal.svg`,
};
