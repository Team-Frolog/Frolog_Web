import React from 'react';
import PopperAnimation from '@/components/animation/PopperAnimation';
import FinishLight from '@/components/Light/FinishLight';
import Image from 'next/image';
import QuitButton from '@/components/Button/QuitButton';
import { IMAGES } from '@/constants/images';
import { TestStartButton } from '@/features/Join';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

function JoinFinishPage() {
  return (
    <div className='safe-screen safe-header relative flex w-full flex-col justify-between overflow-hidden'>
      <FinishLight frog={IMAGES.flash.congrats}>
        야호!
        <br />
        가입이
        <br />
        완료되었어요
      </FinishLight>
      <QuitButton
        route='/'
        classes='absolute left-[24px] top-[24px] z-100 cursor-pointer'
      />
      <div className='flex-col-center w-full justify-end gap-[12px]'>
        <Image
          src={IMAGES.ground}
          alt='ground'
          width={319}
          height={257}
          className='w-full [@media(max-width:350px)]:h-[200px]'
          loading='eager'
        />
        <TestStartButton />
      </div>
      <PopperAnimation />
    </div>
  );
}

export default JoinFinishPage;
