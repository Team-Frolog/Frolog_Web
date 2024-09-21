import { IMAGES } from '@/constants/images';
import { Ground, GroundSmall } from 'public/images';

export type SplashKeys = 'review';

interface Splash {
  getTitle: () => JSX.Element;
  frog: string;
  ground: () => JSX.Element;
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
    ground: () => <GroundSmall className='w-full' />,
    hasPopper: true,
  },
  well: {
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
    ground: () => <Ground className='w-full' />,
    hasPopper: true,
  },
};
