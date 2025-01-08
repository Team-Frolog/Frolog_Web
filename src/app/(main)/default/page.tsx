import { PAGES } from '@/constants/page';
import {
  WellActionButton,
  WellHeader,
  WellTitle,
  FrogOnBook,
} from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
// import WellBubble from 'public/images/well/well-bubble.svg';
import WellBubble from 'public/images/christmas/well/christmas-reading.svg';
import Image from 'next/image';
import { CATEGORY } from '@/constants/category';

function DefaultWellPage() {
  return (
    <>
      <MainLayout extraClass='bg-shape-1 bg-gray-300 justify-between overscroll-none'>
        <WellHeader hasBackButton={false} />
        <WellTitle title='소중한 나의 첫 우물' />
        <WellActionButton
          btnName='로그인이 필요해요'
          iconType='arrow'
          isPointing
          href={PAGES.ONBOARDING}
        />
        <div className='flex w-full flex-col-reverse items-center'>
          <div className='flex w-full flex-col'>
            <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-category-bg-life pt-[20px]'>
              <Image
                src={CATEGORY.life.wave}
                alt='wave'
                width={390}
                height={12}
                // className='absolute -top-[12px] left-0 h-[12px] w-full'
                className='absolute -left-[0px] -top-[12px] h-[65px] w-full'
                loading='eager'
              />
              <WellBubble
                fill={CATEGORY.life.band}
                className='absolute left-[24px] top-[8px]'
              />
              <span className='text-body-sm-bold text-category-text-life'>
                읽는 중인 책은 이렇게 기포가 생겨요!
              </span>
            </div>
            <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-category-bg-economic_business pt-[20px]'>
              <Image
                src={CATEGORY.economic_business.wave}
                alt='wave'
                width={390}
                height={12}
                // className='absolute -top-[12px] left-0 h-[12px] w-full'
                className='absolute -left-[0px] -top-[12px] h-[65px] w-full'
                loading='eager'
              />
              <span className='text-body-sm-bold text-category-text-economic_business'>
                책을 추가해 높이 올라가봐요!
              </span>
            </div>
          </div>

          <FrogOnBook zIndex={10} />
        </div>
      </MainLayout>
    </>
  );
}

export default DefaultWellPage;
