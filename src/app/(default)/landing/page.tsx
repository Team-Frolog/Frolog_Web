'use client';

import LinkButton from '@/components/Button/LinkButton';
import OnBoardingSlide from '@/components/OnBoarding/OnBoardingSlide';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React, { useState } from 'react';

function LandingPage() {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className='flex h-dvh w-full flex-col'>
      <OnBoardingSlide
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <div className='flex w-full shrink-0 flex-col gap-[20px] bg-gray-300 px-page py-[32px]'>
        <LinkButton disabled={false} route={PAGES.LOGIN}>
          로그인 하기
        </LinkButton>
        <div className='flex justify-center gap-[6px]'>
          <span className='text-body-lg text-gray-600'>우리 초면인가요?</span>
          <Link href={PAGES.JOIN} className='text-body-lg-bold text-gray-800'>
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
