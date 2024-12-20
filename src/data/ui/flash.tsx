import BigTitle from '@/components/Text/BigTitle';
import { IMAGES } from '@/constants/images';

interface Flash {
  getTitle: () => JSX.Element;
  frog: string;
  ground: string;
  hasPopper: boolean;
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
      <BigTitle
        type='default'
        extraClass='text-center mobile:text-heading-md-bold'
      >
        야호!
        <br />
        완독을
        <br />
        축하해요!
      </BigTitle>
    ),
    frog: IMAGES.flash.congrats,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    maxHeight: 257,
    marginBottom: -20,
    isRedirect: true,
  },
  new_well: {
    getTitle: () => (
      <BigTitle
        type='default'
        extraClass='text-center mobile:text-heading-md-bold'
      >
        야호!
        <br />
        우물을
        <br />
        새로 팠어요
      </BigTitle>
    ),
    frog: IMAGES.flash.new_well,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    maxHeight: 282,
    marginBottom: -5,
    isRedirect: true,
  },
  first_new_well: {
    getTitle: () => (
      <BigTitle
        type='default'
        extraClass='text-center mobile:text-heading-md-bold'
      >
        야호!
        <br />
        우물을
        <br />
        새로 팠어요
      </BigTitle>
    ),
    frog: IMAGES.flash.new_well,
    ground: IMAGES.ground_sm,
    hasPopper: true,
    maxHeight: 282,
    marginBottom: -2,
    isRedirect: false,
  },
  unsubscribe: {
    getTitle: () => (
      <BigTitle
        type='default'
        extraClass='text-center mobile:text-heading-md-bold'
      >
        이메일
        <br />
        수신 거부
        <br />
        완료
      </BigTitle>
    ),
    frog: IMAGES.flash.unsubscribe,
    ground: IMAGES.ground,
    hasPopper: false,
    maxHeight: 320,
    marginBottom: -60,
    groundMaxHeight: 130,
    isRedirect: false,
  },
  error: {
    getTitle: () => (
      <div className='flex-column flex items-center gap-[16px] pt-[50px]'>
        <h1 className='text-heading-lg-bold text-main'>error</h1>
        <span className='text-title-xl-bold text-gray-800 mobile:text-title-lg-bold'>
          잠시 후 다시 시도해주세요
        </span>
      </div>
    ),
    frog: IMAGES.frog.fallback.error_page,
    ground: IMAGES.ground,
    hasPopper: false,
    maxHeight: 250,
    marginBottom: -60,
    isRedirect: false,
  },
  notfound: {
    getTitle: () => (
      <div className='flex-column items-center gap-[16px] pt-[50px]'>
        <h1 className='text-heading-lg-bold text-main'>404</h1>
        <span className='text-title-xl-bold text-gray-800 mobile:text-title-lg-bold'>
          페이지를 찾을 수 없어요
        </span>
      </div>
    ),
    frog: IMAGES.frog.fallback.notfound_page,
    ground: IMAGES.ground,
    hasPopper: false,
    maxHeight: 250,
    marginBottom: -60,
    isRedirect: false,
  },
} as const;

export type FlashKeys = keyof typeof flash;
