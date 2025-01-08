'use client';

import React, { useEffect, useState } from 'react';
import { IMAGES } from '@/constants/images';
import { PAGES } from '@/constants/page';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BigTitle from '@/components/Text/BigTitle';
import Head from 'next/head';

/** 독서 성향 테스트 중 로딩 페이지 */
function LoadingPage() {
  const type = useSearchParams().get('type');
  const callback = useSearchParams().get('callbackUrl');
  const [isDone, setIsDone] = useState<boolean>(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const loadingTexts = ['분석 중', '분석 중.', '분석 중..'];

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 700);

    setTimeout(() => {
      setIsDone(true);
      clearInterval(loadingInterval);

      setTimeout(() => {
        window.location.replace(
          `${PAGES.TEST_RESULT}/${type}${callback ? `?callbackUrl=${callback}` : ''}`
        );
      }, 1500);
    }, 4000);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <>
      <Head>
        <link rel='preload' href={IMAGES.flash.light} as='image' />
        <link rel='preload' href={IMAGES.flash.evaluation.loading} as='image' />
        <link rel='preload' href={IMAGES.flash.evaluation.done} as='image' />
        <link rel='preload' href={IMAGES.ground} as='image' />
      </Head>
      <div className='safe-screen safe-header flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
        <div className='absolute z-0 flex h-fit w-full flex-1 flex-col items-center bg-gray-900 pt-[30px]'>
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
        </div>
        <div className='z-10 flex h-fit w-full flex-1 flex-col items-center justify-end pt-[170px] mobile:gap-[20px] mobile:pt-[120px]'>
          <div className='flex min-h-[240px] w-fit items-end [@media(max-height:800px)]:min-h-[180px]'>
            <BigTitle
              type='default'
              extraClass='text-center mobile:text-heading-md-bold'
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='pt-[60px]'
              >
                {isDone ? '분석 완료!' : loadingTexts[loadingTextIndex]}
                <br />
                <span className='text-title-xl-bold text-gray-900'>
                  {isDone ? '당신의 독서 성향은...' : '조금만 기다려 주세요!'}
                </span>
              </motion.div>
            </BigTitle>
          </div>

          <div className='flex flex-1 items-end justify-center'>
            <Image
              src={
                !isDone
                  ? IMAGES.flash.evaluation.loading
                  : IMAGES.flash.evaluation.done
              }
              alt='frog'
              width={2896}
              height={3771}
              className='z-10 h-full w-auto [@media(max-height:700px)]:h-auto [@media(max-height:700px)]:w-[80%]'
              loading='eager'
              priority
              style={{ maxHeight: 300, marginBottom: -60 }}
            />
          </div>
          <Image
            src={IMAGES.ground}
            alt='ground'
            width={390}
            height={182}
            className='max-h-[100px] w-full'
            loading='eager'
            priority
          />
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
