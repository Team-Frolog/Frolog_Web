import React from 'react';
import Image from 'next/image';
import BigTitle from '@/components/Text/BigTitle';
import PopperAnimation from '@/components/animation/PopperAnimation';
import { splash } from '@/data/ui/splash';
import { FlashProps } from '.';

interface Props {
  flash: FlashProps;
}

function Flash({ flash }: Props) {
  const { getTitle, frog, ground, width, height, max_height } =
    splash[flash.flashType];

  return (
    <div className='fixed inset-x-0 left-0 top-0 z-100 mx-auto flex h-dvh w-[450px] flex-col items-center justify-between overflow-hidden overscroll-none bg-white mobile:left-0 mobile:w-full'>
      <div className='absolute z-0 flex h-fit w-full flex-1 flex-col items-center bg-gray-900 pt-[30px]'>
        <Image
          src='/images/flash/light.svg'
          alt='light'
          width={481}
          height={476}
          className='z-0 w-full'
          loading='eager'
          priority
        />
        <div className='w-full flex-1 bg-white' />
      </div>
      <div className='z-10 flex w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:pt-[120px]'>
        <BigTitle
          type='default'
          extraClass='text-center mobile:text-heading-md-bold'
        >
          {getTitle()}
        </BigTitle>
        <div className='flex flex-1 items-end justify-center'>
          <Image
            src={frog}
            alt='frog'
            width={width}
            height={height}
            className='h-full w-full'
            loading='eager'
            priority
            style={{ maxHeight: `${max_height}px`, marginBottom: '-5px' }}
          />
        </div>
        {flash.flashType === 'review' && (
          <div
            className={`relative flex h-[50px] w-[80%] items-center justify-center rounded-[3px] bg-category-bg-${'novel'}`}
          >
            <div
              className={`absolute left-[24px] top-0 h-full w-[12px] bg-category-band-${'novel'}`}
            />
            <span
              className={`w-[75%] truncate text-center text-body-sm-bold text-category-text-${'novel'}`}
            >
              {flash.bookTitle}
            </span>
          </div>
        )}
        <Image
          src={ground}
          alt='ground'
          width={390}
          height={182}
          className='w-full'
          priority
        />
      </div>
      <PopperAnimation />
    </div>
  );
}

export default Flash;
