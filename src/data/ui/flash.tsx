import { IMAGES } from '@/constants/images';

export type FlashKeys = 'review';

interface Flash {
  getTitle: () => JSX.Element;
  frog: string;
  ground: string;
  hasPopper: boolean;
  width: number;
  height: number;
  max_height: number;
}

export const flash: {
  [key: string]: Flash;
} = {
  review: {
    getTitle: () => (
      <>
        야호!
        <br />
        완독을
        <br />
        축하해요!
      </>
    ),
    frog: IMAGES.frog.congrats,
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
