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
    frog: IMAGES.flash.congrats,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    width: 1661,
    height: 1339,
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
    frog: IMAGES.flash.new_well,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    width: 1255,
    height: 1469,
    max_height: 282,
  },
  first_new_well: {
    getTitle: () => (
      <>
        야호!
        <br />
        우물을
        <br />
        새로 팠어요
      </>
    ),
    frog: IMAGES.flash.new_well,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    width: 1255,
    height: 1469,
    max_height: 282,
  },
  unsubscribe: {
    getTitle: () => (
      <>
        이메일
        <br />
        수신 거부
        <br />
        완료
      </>
    ),
    frog: IMAGES.flash.unsubscribe,
    ground: IMAGES.ground,
    hasPopper: false,
    width: 2490,
    height: 3417,
    max_height: 320,
  },
};
