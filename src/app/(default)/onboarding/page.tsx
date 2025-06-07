'use client';

/* eslint-disable react/no-array-index-key */

import Button from '@/components/Button/Button';
import OnBoardingSlide from '@/components/OnBoarding/OnBoardingSlide';
import { PAGES } from '@/constants/page';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import GoogleIcon from 'public/logo/sns/google.svg';

function OnBoardingPage() {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      handleGoogleAuth(code);
    }
  }, []);

  const handleClickGoogleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;
    window.location.href = googleLoginUrl;
  };

  const handleGoogleAuth = async (code: string) => {
    console.log(code);
  };

  return (
    <div className='safe-screen safe-bottom safe-header flex h-[100dvh] w-full flex-col bg-gray-900'>
      <OnBoardingSlide setActiveSlide={setActiveSlide} />
      <div
        className={`flex h-[22dvh] w-full flex-col items-center gap-[20px] ${activeSlide === 1 ? 'bg-category-bg-science' : 'bg-gray-300'} px-page py-[32px] pt-[12px] transition-all duration-200 [@media(max-height:750px)]:h-[25dvh]`}
      >
        <div className='flex gap-[8px]'>
          {Array(3)
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
        <Button
          disabled={false}
          theme='light'
          onClick={handleClickGoogleLogin}
          extraClass='relative text-gray-800 text-body-lg-bold'
        >
          <GoogleIcon className='absolute left-5 top-1/2 -translate-y-1/2' />
          Google로 로그인
        </Button>
        <div className='flex justify-center'>
          <Link
            href={PAGES.JOIN}
            className={`text-body-lg ${activeSlide === 1 ? 'text-white' : 'text-gray-600'}`}
          >
            이메일로 로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnBoardingPage;
