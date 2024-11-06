'use client';

/* eslint-disable react/no-array-index-key */

import LinkButton from '@/components/Button/LinkButton';
import OnBoardingSlide from '@/components/OnBoarding/OnBoardingSlide';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React, { useState } from 'react';

function LandingPage() {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className='safe-screen safe-bottom safe-header flex h-full min-h-[650px] w-full flex-col bg-gray-900'>
      <OnBoardingSlide setActiveSlide={setActiveSlide} />
      <div className='flex w-full shrink-0 flex-col items-center gap-[20px] px-page py-[34px] pt-[12px] transition-all duration-200'>
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
        <LinkButton disabled={false} route={PAGES.LOGIN}>
          로그인 하기
        </LinkButton>
        <div className='flex justify-center'>
          <Link href={PAGES.JOIN} className='text-body-lg-bold text-white'>
            15초만에 회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
