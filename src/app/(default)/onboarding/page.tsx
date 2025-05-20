'use client';

/* eslint-disable react/no-array-index-key */

import LinkButton from '@/components/Button/LinkButton';
import OnBoardingSlide from '@/components/OnBoarding/OnBoardingSlide';
import { PAGES } from '@/constants/page';
import GoogleIcon from 'public/logo/sns/btn_google.svg';
import Link from 'next/link';
import React, { useState } from 'react';

function OnBoardingPage() {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className='safe-screen safe-bottom safe-header flex h-full min-h-[650px] w-full flex-col bg-gray-900'>
      <OnBoardingSlide setActiveSlide={setActiveSlide} />
      <div className='flex w-full shrink-0 flex-col items-center gap-[20px] bg-[#4E72FF] px-page py-[32px] pt-[12px] transition-all duration-200'>
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

        <div className='relative flex w-full items-center'>
          <GoogleIcon className='absolute left-5 z-20' />
          <LinkButton
            disabled={false}
            route={PAGES.LOGIN}
            extraClass='bg-white text-gray-800'
          >
            Google로 로그인
          </LinkButton>
        </div>
        <div className='flex justify-center'>
          <Link href={PAGES.JOIN} className='text-body-lg-regular text-white'>
            이메일로 로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnBoardingPage;
