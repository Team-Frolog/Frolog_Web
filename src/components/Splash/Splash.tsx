'use client';

import React from 'react';
import Image from 'next/image';
import PopperAnimation from '@/components/animation/PopperAnimation';
import { splash, SplashKeys } from '@/data/ui/splash';
import { useBook } from '@/features/Book';
import { IMAGES } from '@/constants/images';
import Portal from '@/layouts/Portal';
import BigTitle from '../Text/BigTitle';

interface Props {
  type: SplashKeys;
  bookId: string;
}

function Splash({ type, bookId }: Props) {
  const { getTitle, frog, hasPopper } = splash[type];
  const { bookData } = useBook(bookId);

  return (
    <Portal>
      <div className='fixed inset-x-0 left-0 top-0 z-50 mx-auto flex h-dvh w-[450px] flex-col items-center justify-between overflow-hidden overscroll-none bg-white mobile:left-0 mobile:w-full'>
        <div className='absolute z-0 flex h-fit w-full flex-1 flex-col items-center bg-gray-900 pt-[30px]'>
          <Image
            src='/icons/light/light.svg'
            alt='light'
            width={30}
            height={30}
            className='z-0 w-full'
            loading='eager'
          />
          <div className='w-full flex-1 bg-white' />
        </div>
        <div className='z-10 flex w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:pt-[120px]'>
          <BigTitle
            type='default'
            extraClass='text-center mobile:text-h_md_bold'
          >
            {getTitle()}
          </BigTitle>
          <div className='flex flex-1 items-end justify-center'>
            <Image
              src={frog}
              alt='frog'
              width={319}
              height={257}
              className='h-full max-h-[257px] w-full mobile:w-[90%]'
              loading='eager'
            />
          </div>
          <div
            className={`relative flex h-[50px] w-[80%] items-center justify-center rounded-[3px] bg-category-bg-${'novel'}`}
          >
            <div
              className={`absolute left-[24px] top-0 h-full w-[12px] bg-category-band-${'novel'}`}
            />
            <span
              className={`w-[75%] truncate text-center text-body_sm_bold text-category-text-${'novel'}`}
            >
              {bookData?.title}
            </span>
          </div>
          <Image
            src={IMAGES.ground_sm}
            alt='ground'
            width={390}
            height={106}
            className='w-full'
            loading='eager'
          />
        </div>

        {hasPopper && <PopperAnimation />}
      </div>
    </Portal>
  );
}

export default Splash;
