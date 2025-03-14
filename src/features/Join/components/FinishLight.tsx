import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/Text/BigTitle';
import { IMAGES } from '@/constants/images';

interface Props {
  children: React.ReactNode;
  /** 개구리 이미지 src */
  frog: string;
  /** 개구리 최대 높이 */
  frogMaxHeight?: number;
}

/** 회원가입 완료 페이지의 상단 불빛 부분 컴포넌트 */
function FinishLight({ children, frog, frogMaxHeight }: Props) {
  return (
    <div className='relative z-10 flex h-fit w-full flex-1 flex-col bg-gray-900 pt-[30px]'>
      <Image
        src={IMAGES.flash.light}
        alt='light'
        width={2505}
        height={2479}
        className='z-0 w-full'
        loading='eager'
        priority
      />
      <div className='w-full flex-1 bg-white' />
      <div className='flex-col-center absolute left-1/2 z-10 h-full w-full -translate-x-1/2 justify-between gap-[10px] pt-[150px] [@media(max-height:800px)]:pt-[100px]'>
        <BigTitle
          type='default'
          extraClass='text-center mobile:text-heading-md-bold'
        >
          {children}
        </BigTitle>

        <div className='relative flex w-full flex-1 items-end justify-center'>
          <div
            style={{ maxHeight: frogMaxHeight || '250px' }}
            className='relative flex h-full w-full'
          >
            <Image
              src={frog}
              alt='frog'
              fill
              className='z-10 h-full w-auto object-contain'
              loading='eager'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishLight;
