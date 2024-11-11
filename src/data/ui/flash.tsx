import { IMAGES } from '@/constants/images';

interface Flash {
  getTitle: () => JSX.Element;
  frog: string;
  ground: string;
  hasPopper: boolean;
  width: number;
  height: number;
  maxHeight: number;
  marginBottom: number;
  groundMaxHeight?: number;
  isRedirect: boolean;
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
    maxHeight: 257,
    marginBottom: -20,
    isRedirect: true,
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
    maxHeight: 282,
    marginBottom: -5,
    isRedirect: true,
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
    maxHeight: 282,
    marginBottom: -5,
    isRedirect: false,
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
    maxHeight: 320,
    marginBottom: -60,
    groundMaxHeight: 130,
    isRedirect: false,
  },
} as const;

export type FlashKeys = keyof typeof flash;
