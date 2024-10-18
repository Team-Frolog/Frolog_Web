const DARK = 'dark';
const LIGHT = 'light';
const GRAY = 'gray';
const HALF = 'half-gradient';

export const PAGE_THEME: {
  [key: string]: string;
} = {
  '': DARK,
  '/landing': DARK,
  '/join': DARK,
  '/join/finish': DARK,
  '/login': DARK,
  '/find-password': DARK,
  '/frolog-test': LIGHT,
  '/frolog-test/result/1': DARK,
  '/frolog-test/result/2': DARK,
  '/frolog-test/result/3': DARK,
  '/well': DARK,
  '/writing': HALF,
  '/new-review': HALF,
  '/search': LIGHT,
  '/feed': GRAY,
  '/profile': LIGHT,
  '/well-book': HALF,
  '/new-well': LIGHT,
};
