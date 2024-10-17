import { IMAGES } from '@/constants/images';

export type SplashKeys = 'review';

interface Splash {
  getTitle: () => JSX.Element;
  frog: string;
  ground: string;
  hasPopper: boolean;
  width: number;
  height: number;
  max_height: number;
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
    ground: IMAGES.ground_sm,
    hasPopper: true,
    width: 166,
    height: 185,
    max_height: 257,
  },
  new_well: {
    getTitle: () => (
      <>
        야호!
        <br />
        우물을
        <br />
        새로 팠어요
      </>
    ),
    frog: IMAGES.frog.new_well,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    width: 141,
    height: 182,
    max_height: 282,
  },
};
