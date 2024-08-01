import { IMAGES } from '@/constants/images';

export type SplashKeys = 'review';

interface Splash {
  getTitle: () => JSX.Element;
  frog: string;
  route: string;
  hasPopper: boolean;
}

export const splash: {
  [key: string]: Splash;
} = {
  review: {
    getTitle: () => (
      <>
        우물에
        <br />
        책 1권이
        <br />
        쌓였어요!
      </>
    ),
    frog: IMAGES.frog.review_done,
    route: '/',
    hasPopper: true,
  },
};
