const DARK = 'dark';
const LIGHT = 'light';
const HALF = 'half-gradient';

export const PAGE_THEME: {
  [key: string]: string;
} = {
  '': DARK,
  '/book': HALF,
  '/onboarding': DARK,
  '/join': DARK,
  '/unsubscribe': DARK,
  '/login': DARK,
  '/find-password': DARK,
  '/frolog-test': LIGHT,
  '/frolog-test/result/1': DARK,
  '/frolog-test/result/2': DARK,
  '/frolog-test/result/3': DARK,
  '/flash': DARK,
  '/well': DARK,
  '/well/create': LIGHT,
  '/edit': LIGHT,
  '/writing': HALF,
  '/new-review': HALF,
  '/new-memo': LIGHT,
  '/search': LIGHT,
  '/search-home': DARK,
  '/feed': HALF,
  '/comments': LIGHT,
  '/profile': DARK,
  '/profile/follows': LIGHT,
  '/new-well': LIGHT,
  '/how-to-install': LIGHT,
  '/terms': LIGHT,
  '/quit': LIGHT,
  '/store': LIGHT,
  '/mission': LIGHT,
};
