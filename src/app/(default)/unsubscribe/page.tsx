import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import PopperAnimation from '@/components/animation/PopperAnimation';
import BigTitle from '@/components/Text/BigTitle';
import Head from 'next/head';
import { flash } from '@/data/ui/flash';

export type FlashType = 'review' | 'new_well' | 'first_new_well';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

function UnsubscribePage() {
  const { getTitle, frog, ground, hasPopper, width, height, max_height } =
    flash.unsubscribe;

  return (
    <>
      <Head>
        <link rel='preload' href='/images/flash/light.webp' as='image' />
        <link rel='preload' href='' as='image' />
        <link rel='preload' href='' as='image' />
      </Head>
      <div className='safe-screen safe-header flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
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
        <div className='z-10 flex h-fit w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:gap-[20px] mobile:pt-[120px]'>
          <div className='flex min-h-[240px] w-fit items-end [@media(max-height:800px)]:min-h-[180px]'>
            <BigTitle
              type='default'
              extraClass='text-center mobile:text-heading-md-bold'
            >
              {getTitle()}
            </BigTitle>
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
              style={{ maxHeight: max_height, marginBottom: '-60px' }}
            />
          </div>
          <Image
            src={ground}
            alt='ground'
            width={390}
            height={182}
            className='max-h-[130px] w-full'
            loading='eager'
            priority
          />
        </div>
        {hasPopper && <PopperAnimation />}
      </div>
    </>
  );
}

export default UnsubscribePage;
