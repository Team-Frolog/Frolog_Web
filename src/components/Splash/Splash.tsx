'use client';

import React from 'react';
import Image from 'next/image';
import PopperAnimation from '@/components/animation/PopperAnimation';
import { splash, SplashKeys } from '@/data/ui/splash';
import { ICONS } from '@/constants/icons';
import { IMAGES } from '@/constants/images';
import Portal from '@/layouts/Portal';
import BigTitle from '../Text/BigTitle';

interface Props {
  type: SplashKeys;
}

function Splash({ type }: Props) {
  const { getTitle, frog, hasPopper } = splash[type];

  return (
    <Portal>
      <div className='fixed inset-x-0 left-0 top-0 z-50 mx-auto flex h-dvh w-[450px] flex-col justify-between overflow-hidden overscroll-none mobile:left-0 mobile:w-full'>
        <div className='relative z-0 flex h-fit w-full flex-1 flex-col bg-gray-900 pt-[30px]'>
          <Image
            src={ICONS.join.light}
            alt='light'
            width={30}
            height={30}
            className='z-0 w-full'
            loading='eager'
          />
          <div className='w-full flex-1 bg-white' />
          <div className='flex-col-center absolute left-1/2 z-10 h-full w-full -translate-x-1/2 justify-between gap-[10px] pt-[150px] mobile:pt-[100px]'>
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
          </div>
        </div>
        <Image
          src={IMAGES.ground_sm}
          alt='ground'
          width={390}
          height={106}
          className='w-full'
          loading='eager'
        />
        {hasPopper && <PopperAnimation />}
      </div>
    </Portal>
  );
}

export default Splash;
