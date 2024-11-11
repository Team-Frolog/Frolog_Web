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
    src: `${BASE_PATH}/frog/character/square/default-square.webp`,
    name: '개꾸리',
    marginBottom: 0,
  },
  fro: {
    src: `${BASE_PATH}/frog/character/square/fro-square.webp`,
    name: '프로',
    marginBottom: 0,
  },
  roro: {
    src: `${BASE_PATH}/frog/character/square/roro-square.webp`,
    name: '로로',
    marginBottom: 0,
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/square/rogy-square.webp`,
    name: '로기',
    marginBottom: 0,
  },
  ghost: {
    src: `${BASE_PATH}/frog/character/square/ghost-square.webp`,
    name: '유령꾸리',
    marginBottom: 0,
  },
  mummy: {
    src: `${BASE_PATH}/frog/character/square/mummy-square.webp`,
    name: '미라꾸리',
    marginBottom: 0,
  },
  pumpkin: {
    src: `${BASE_PATH}/frog/character/square/pumpkin-square.webp`,
    name: '호박꾸리',
    marginBottom: 0,
  },
  skeleton: {
    src: `${BASE_PATH}/frog/character/square/skeleton-square.webp`,
    name: '해골꾸리',
    marginBottom: 0,
  },
  devil: {
    src: `${BASE_PATH}/frog/character/square/devil-square.webp`,
    name: '악마꾸리',
    marginBottom: 0,
  },
  gguristein: {
    src: `${BASE_PATH}/frog/character/square/gguristein-square.webp`,
    name: '꾸리슈타인',
    marginBottom: 0,
  },
  witch: {
    src: `${BASE_PATH}/frog/character/square/witch-square.webp`,
    name: '마녀꾸리',
    marginBottom: 20,
  },
  dracula: {
    src: `${BASE_PATH}/frog/character/square/dracula-square.webp`,
    name: '꾸리백작',
    marginBottom: 10,
  },
} as const;

export const FROGS_SILHOUETTE: {
  [key: string]: string;
} = {
  roro: `${BASE_PATH}/frog/character/silhouette/roro-silhouette.webp`,
  rogy: `${BASE_PATH}/frog/character/silhouette/rogy-silhouette.webp`,
  ghost: `${BASE_PATH}/frog/character/silhouette/ghost-silhouette.webp`,
  mummy: `${BASE_PATH}/frog/character/silhouette/mummy-silhouette.webp`,
  pumpkin: `${BASE_PATH}/frog/character/silhouette/pumpkin-silhouette.webp`,
  skeleton: `${BASE_PATH}/frog/character/silhouette/skeleton-silhouette.webp`,
  devil: `${BASE_PATH}/frog/character/silhouette/devil-silhouette.webp`,
  gguristein: `${BASE_PATH}/frog/character/silhouette/gguristein-silhouette.webp`,
  witch: `${BASE_PATH}/frog/character/silhouette/witch-silhouette.webp`,
  dracula: `${BASE_PATH}/frog/character/silhouette/dracula-silhouette.webp`,
};

export const SHEET_FROG = {
  error: `${BASE_PATH}/frog/sheet/frog-sheet-error.svg`,
  book: `${BASE_PATH}/frog/sheet/frog-with-book.svg`,
  wink: `${BASE_PATH}/frog/sheet/wink-frog.svg`,
  normal: `${BASE_PATH}/frog/sheet/frog-normal.svg`,
};
