const DARK = 'dark';
const LIGHT = 'light';
const HALF = 'half-gradient';

export const PAGE_THEME: {
  [key: string]: string;
} = {
  '': DARK,
  '/onboarding': DARK,
  '/join/finish': DARK,
  '/join': DARK,
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
  '/search-home': DARK,
  '/feed': DARK,
  '/comments': LIGHT,
  '/profile': DARK,
  '/profile/edit': LIGHT,
  '/profile/follows': LIGHT,
  '/new-well': LIGHT,
  '/how-to-install': LIGHT,
};
