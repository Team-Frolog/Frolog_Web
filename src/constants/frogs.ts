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
    src: `${BASE_PATH}/frog/character/default.webp`,
    name: '개꾸리',
    marginBottom: 0,
  },
  fro: {
    src: `${BASE_PATH}/frog/character/fro.webp`,
    name: '프로',
    marginBottom: 0,
  },
  roro: {
    src: `${BASE_PATH}/frog/character/roro.webp`,
    name: '로로',
    marginBottom: 0,
  },
  rogy: {
    src: `${BASE_PATH}/frog/character/rogy.webp`,
    name: '로기',
    marginBottom: 0,
  },
  ghost: {
    src: `${BASE_PATH}/frog/character/ghost.webp`,
    name: '유령꾸리',
    marginBottom: 0,
  },
  mummy: {
    src: `${BASE_PATH}/frog/character/mummy.webp`,
    name: '미라꾸리',
    marginBottom: 0,
  },
  pumpkin: {
    src: `${BASE_PATH}/frog/character/pumpkin.webp`,
    name: '호박꾸리',
    marginBottom: 0,
  },
  skeleton: {
    src: `${BASE_PATH}/frog/character/skeleton.webp`,
    name: '해골꾸리',
    marginBottom: 0,
  },
  devil: {
    src: `${BASE_PATH}/frog/character/devil.webp`,
    name: '악마꾸리',
    marginBottom: 0,
  },
  gguristein: {
    src: `${BASE_PATH}/frog/character/gguristein.webp`,
    name: '꾸리슈타인',
    marginBottom: 0,
  },
  witch: {
    src: `${BASE_PATH}/frog/character/witch.webp`,
    name: '마녀꾸리',
    marginBottom: 20,
  },
  dracula: {
    src: `${BASE_PATH}/frog/character/dracula.webp`,
    name: '꾸리백작',
    marginBottom: 10,
  },
  // 크리스마스 캐릭터
  gguristmas: {
    src: `${BASE_PATH}/christmas/character/gguristmas.webp`,
    name: '꾸리스마스',
    marginBottom: 0,
  },
  box: {
    src: `${BASE_PATH}/christmas/character/box.webp`,
    name: '상자꾸리',
    marginBottom: 10,
  },
  candle: {
    src: `${BASE_PATH}/christmas/character/candle.webp`,
    name: '양초꾸리',
    marginBottom: 10,
  },
  gguribread: {
    src: `${BASE_PATH}/christmas/character/gguribread.webp`,
    name: '꾸리브레드',
    marginBottom: 0,
  },
  snowgguri: {
    src: `${BASE_PATH}/christmas/character/snowgguri.webp`,
    name: '눈꾸리',
    marginBottom: 0,
  },
  santa: {
    src: `${BASE_PATH}/christmas/character/santa.webp`,
    name: '산타꾸리',
    marginBottom: 0,
  },
  tree: {
    src: `${BASE_PATH}/christmas/character/tree.webp`,
    name: '트리꾸리',
    marginBottom: 20,
  },
  ggudolph: {
    src: `${BASE_PATH}/christmas/character/ggudolph.webp`,
    name: '꾸돌프',
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
  // 크리스마스
  gguristmas: `${BASE_PATH}/christmas/character/silhouette/gguristmas-silhouette.webp`,
  box: `${BASE_PATH}/christmas/character/silhouette/box-silhouette.webp`,
  candle: `${BASE_PATH}/christmas/character/silhouette/candle-silhouette.webp`,
  gguribread: `${BASE_PATH}/christmas/character/silhouette/gguribread-silhouette.webp`,
  snowgguri: `${BASE_PATH}/christmas/character/silhouette/snowgguri-silhouette.webp`,
  santa: `${BASE_PATH}/christmas/character/silhouette/santa-silhouette.webp`,
  tree: `${BASE_PATH}/christmas/character/silhouette/tree-silhouette.webp`,
  ggudolph: `${BASE_PATH}/christmas/character/silhouette/ggudolph-silhouette.webp`,
} as const;

export const SHEET_FROG = {
  error: `${BASE_PATH}/frog/sheet/frog-sheet-error.svg`,
  book: `${BASE_PATH}/frog/sheet/frog-with-book.svg`,
  wink: `${BASE_PATH}/frog/sheet/wink-frog.svg`,
  normal: `${BASE_PATH}/frog/sheet/frog-normal.svg`,
} as const;
