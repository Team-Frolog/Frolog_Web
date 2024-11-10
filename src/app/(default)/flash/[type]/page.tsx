import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import PopperAnimation from '@/components/animation/PopperAnimation';
import FlashHandler from '@/components/Gesture/FlashHandler';
import BigTitle from '@/components/Text/BigTitle';
import { flash } from '@/data/ui/flash';
import LinkButton from '@/components/Button/LinkButton';
import Head from 'next/head';

export type FlashType = 'review' | 'new_well' | 'first_new_well';

interface Props {
  params: {
    type: FlashType;
  };
}

export async function generateStaticParams() {
  return [{ type: 'review' }, { type: 'new_well' }, { type: 'first_new_well' }];
}

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

function FlashPage({ params: { type } }: Props) {
  const { getTitle, frog, ground, width, height, max_height } = flash[type];

  return (
    <>
      <Head>
        <link rel='preload' href='/images/flash/light.webp' as='image' />
        <link rel='preload' href={frog} as='image' />
        <link rel='preload' href={ground} as='image' />
      </Head>
      <div className='safe-screen safe-header flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
        <FlashHandler type={type} />
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
              className='h-full w-auto [@media(max-height:700px)]:h-auto [@media(max-height:700px)]:w-[80%]'
              loading='eager'
              priority
              style={{ maxHeight: `${max_height}px`, marginBottom: '-5px' }}
            />
          </div>
          {type === 'first_new_well' ? (
            <div className='relative flex h-fit w-full'>
              <Image
                src={ground}
                alt='ground'
                width={390}
                height={182}
                className='h-[100px] w-full'
                loading='eager'
                priority
              />
              <div className='absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-center px-page'>
                <LinkButton route='/'>확인</LinkButton>
              </div>
            </div>
          ) : (
            <Image
              src={ground}
              alt='ground'
              width={390}
              height={182}
              className='w-full'
              loading='eager'
              priority
            />
          )}
        </div>
        <PopperAnimation />
      </div>
    </>
  );
}

export default FlashPage;
