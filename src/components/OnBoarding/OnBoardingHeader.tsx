/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { onBoarding } from '@/data/ui/onBoarding';
import BackButton from '../Button/BackButton';

interface Props {
  activeSlide: number;
}

function OnBoardingHeader({ activeSlide }: Props) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [before, setBefore] = useState(1);

  useEffect(() => {
    if (before === 2 && activeSlide === 3) {
      setShow(true);
    } else {
      setShow(false);
    }
    setBefore(activeSlide);
  }, [activeSlide]);

  return (
    <>
      {(activeSlide === 1 || activeSlide === 2 || show) && (
        <motion.div
          className='fixed left-1/2 top-0 z-0 h-[50%] w-[450px] -translate-x-1/2 mobile:w-full'
          style={{
            background:
              'linear-gradient(-35deg, rgba(0, 0, 0, 0) 52%, #0E0E0E 52%)',
          }}
        />
      )}
      <div className='z-10 flex w-full shrink-0 flex-col gap-[20px] px-page py-page pb-0'>
        <BackButton
          fill={activeSlide === 4 ? '#727384' : '#B3B6C4'}
          onClick={() => router.back()}
        />
        <h1
          className={`text-heading-md-bold mobile:text-title-xl-bold [@media(max-height:700px)]:text-title-xl-bold ${onBoarding[activeSlide].titleColor}`}
        >
          {onBoarding[activeSlide].title()}
        </h1>
        <div className='flex gap-[8px]'>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={
                  activeSlide === i + 1 ? 'active-circle' : 'non-active-circle'
                }
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default OnBoardingHeader;
