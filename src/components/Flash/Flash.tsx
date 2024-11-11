import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { flash, FlashKeys } from '@/data/ui/flash';
import PopperAnimation from '../animation/PopperAnimation';
import FlashHandler from '../Gesture/FlashHandler';

interface Props {
  flashKey: FlashKeys;
  children: React.ReactNode;
}

function Flash({ children, flashKey }: Props) {
  const {
    getTitle,
    frog,
    ground,
    hasPopper,
    width,
    height,
    maxHeight,
    marginBottom,
    groundMaxHeight,
    isRedirect,
  } = flash[flashKey];

  return (
    <>
      <Head>
        <link rel='preload' href='/images/flash/light.webp' as='image' />
        <link rel='preload' href={frog} as='image' />
        <link rel='preload' href={ground} as='image' />
      </Head>
      <div className='safe-screen safe-header flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
        <FlashHandler type={flashKey} isRedirect={isRedirect} />
        <div className='absolute z-0 flex h-fit w-full flex-1 flex-col items-center bg-gray-900 pt-[30px]'>
          <Image
            src='/images/flash/light.webp'
            alt='light'
            width={2505}
            height={2479}
            className='z-0 w-full'
            loading='eager'
            priority
          />
          <div className='w-full flex-1 bg-white' />
        </div>
        <div className='z-10 flex h-fit w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:pt-[120px]'>
          <div className='flex min-h-[240px] w-fit items-end mobile:mb-[16px] [@media(max-height:800px)]:min-h-[180px]'>
            {getTitle()}
          </div>

          <div className='flex flex-1 items-end justify-center'>
            <Image
              src={frog}
              alt='frog'
              width={width}
              height={height}
              className='z-10 h-full w-auto [@media(max-height:700px)]:h-auto [@media(max-height:700px)]:w-[80%]'
              loading='eager'
              priority
              style={{ maxHeight, marginBottom }}
            />
          </div>
          {children || (
            <Image
              src={ground}
              alt='ground'
              width={390}
              height={182}
              className='w-full'
              style={{ maxHeight: groundMaxHeight || 'none' }}
              loading='eager'
              priority
            />
          )}
        </div>
        {hasPopper && <PopperAnimation />}
      </div>
    </>
  );
}

export default Flash;
