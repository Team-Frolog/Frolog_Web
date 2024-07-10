import { IMAGES } from '@/constants/images';

export type SplashKeys = 'review';

interface Splash {
  getTitle: () => JSX.Element;
  frog: string;
  route: string;
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
    frog: IMAGES.frog.congrats,
    route: '/well',
  },
};
