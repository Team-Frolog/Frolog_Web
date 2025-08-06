import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import PopperAnimation from '@/components/animation/PopperAnimation';
import QuitButton from '@/components/Button/QuitButton';
import { IMAGES } from '@/constants/images';
import { FinishLight } from '@/features/Join';
import { PAGES } from '@/constants/page';
import LinkButton from '@/components/Button/LinkButton';

function JoinFinishPage() {
  return (
    <div className='safe-screen relative flex w-full flex-col justify-between overflow-hidden'>
      <FinishLight frog={IMAGES.flash.congrats}>
        가입이
        <br />
        완료되었어요
      </FinishLight>
      <QuitButton
        route={PAGES.HOME}
        classes='absolute left-[24px] top-[24px] z-100 cursor-pointer'
      />
      <div>
        <Image
          src={IMAGES.ground}
          alt='ground'
          width={319}
          height={257}
          className='w-full [@media(max-width:350px)]:h-[200px]'
          loading='eager'
        />
        <div className='absolute bottom-5 left-0 flex w-full p-page'>
          <LinkButton route={PAGES.HOME}>프롤로그 입장하기</LinkButton>
        </div>
      </div>
      <PopperAnimation />
    </div>
  );
}

export default JoinFinishPage;

export const metadata: Metadata = {
  title: '회원가입',
  openGraph: {
    title: '회원가입',
  },
  twitter: {
    title: '회원가입',
  },
};
