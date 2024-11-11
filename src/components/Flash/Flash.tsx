import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { flash, FlashKeys } from '@/data/ui/flash';
import BigTitle from '../Text/BigTitle';
import PopperAnimation from '../animation/PopperAnimation';
import LinkButton from '../Button/LinkButton';

interface Props {
  flashKey: FlashKeys;
}

function Flash({ flashKey }: Props) {
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
  } = flash[flashKey];

  return (
    <>
      <Head>
        <link rel='preload' href='/images/flash/light.webp' as='image' />
        <link rel='preload' href={frog} as='image' />
        <link rel='preload' href={ground} as='image' />
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
              style={{ maxHeight, marginBottom }}
            />
          </div>
          {flashKey === 'first_new_well' ? (
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
