const DARK = '#0E0E0E';
const LIGHT = '#FFFFFF';
const HALF = 'linear-gradient(to bottom, #0E0E0E 10%, white 10%)';

export const PAGE_THEME: {
  [key: string]: string;
} = {
  '/': DARK,
  '/landing': DARK,
  '/join': DARK,
  '/join/finish': DARK,
  '/login': DARK,
  '/find-password': DARK,
  '/frolog-test': LIGHT,
  '/frolog-test/result/1': LIGHT,
  '/frolog-test/result/2': LIGHT,
  '/frolog-test/result/3': LIGHT,
  '/well': HALF,
  '/writing': HALF,
};
