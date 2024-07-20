import React from 'react';
import PopperAnimation from '@/components/animation/PopperAnimation';
import FinishLight from '@/components/Splash/FinishLight';
import Image from 'next/image';
import QuitButton from '@/components/Button/QuitButton';
import { IMAGES } from '@/constants/images';
import { TestStartButton } from '@/features/Join';

function JoinFinishPage() {
  return (
    <div className='relative flex h-dvh w-full flex-col justify-between overflow-hidden'>
      <QuitButton
        route='/'
        classes='absolute left-[24px] top-[24px] z-10 cursor-pointer'
      />
      <FinishLight frog={IMAGES.frog.congrats}>
        야호!
        <br />
        가입이
        <br />
        완료되었어요
      </FinishLight>
      <div className='flex w-full flex-col items-center justify-end gap-[12px]'>
        <Image
          src={IMAGES.ground}
          alt='ground'
          width={319}
          height={257}
          className='w-full'
          loading='eager'
        />
        <TestStartButton />
      </div>
      <PopperAnimation />
    </div>
  );
}

export default JoinFinishPage;
