'use client';

import React, { useEffect, useState } from 'react';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { PAGES } from '@/constants/page';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import FinishLight from '../common/splash/FinishLight';

function LoadingPage() {
  const type = useSearchParams().get('type');
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
        window.location.replace(`${PAGES.TEST_RESULT}/${type}`);
      }, 1500);
    }, 4000);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className='flex h-full w-full flex-col items-center'>
      <FinishLight>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isDone ? '분석 완료!' : loadingTexts[loadingTextIndex]}
          <br />
          <span className='text-title_xl_bold text-gray-900'>
            {isDone ? '당신의 독서 성향은...' : '조금만 기다려 주세요!'}
          </span>
        </motion.div>
      </FinishLight>
      <Image
        src={
          isDone ? IMAGES.frog.evaluation.done : IMAGES.frog.evaluation.loading
        }
        alt='loading'
        width={300}
        height={300}
        className='w-full bg-white'
      />
    </div>
  );
}

export default LoadingPage;
