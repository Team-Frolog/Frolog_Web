import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import LinkButton from '@/components/Button/LinkButton';
import BackButton from '@/components/Button/BackButton';
import FinishLight from '../components/Light/FinishLight';

function NotFound() {
  return (
    <div className='safe-screen safe-header relative flex w-full flex-col items-center justify-between overflow-hidden overscroll-none bg-white'>
      <BackButton
        safeArea='back-fixed'
        extraClass='absolute left-[24px] z-100'
      />
      <FinishLight frog='/images/frog/fallback/error-frog.svg'>
        <div className='flex flex-col items-center gap-[16px] pt-[50px]'>
          <h1 className='text-heading-lg-bold text-main'>404</h1>
          <span className='text-title-xl-bold text-gray-800 mobile:text-title-lg-bold'>
            페이지를 찾을 수 없어요
          </span>
        </div>
      </FinishLight>

      <div className='flex-col-center relative w-full justify-end gap-[12px]'>
        <Image
          src={IMAGES.ground}
          alt='ground'
          width={319}
          height={257}
          className='h-auto max-h-[160px] w-full'
          loading='eager'
          priority
        />
        <div className='absolute bottom-0 left-0 flex w-full p-page'>
          <LinkButton route='/'>홈으로 돌아가기</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
