import { PAGES } from '@/constants/page';
import {
  WellActionButton,
  WellHeader,
  WellTitle,
  FrogOnBook,
} from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import WellBubble from 'public/images/well/well-bubble.svg';
import Image from 'next/image';

function DefaultWellPage() {
  return (
    <>
      <MainLayout extraClass='bg-shape-1 bg-gray-300 justify-between overscroll-none'>
        <WellHeader hasBackButton={false} />
        <WellTitle title='소중한 나의 첫 우물' />
        <WellActionButton
          btnName='로그인이 필요해요'
          type='arrow'
          isPointing
          href={PAGES.LANDING}
          itemCount={2}
        />
        <div className='flex w-full flex-col-reverse items-center'>
          <div className='flex w-full flex-col'>
            <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-[#A6B4D3] pt-[12px]'>
              <Image
                src='/images/well/wave/default-2.svg'
                alt='wave'
                width={390}
                height={12}
                className='absolute -top-[12px] left-0 h-[12px] w-full'
                loading='eager'
              />
              <WellBubble
                fill='#C0CEED'
                className='absolute left-[24px] top-[8px]'
              />
              <span className='text-body-sm-bold text-gray-600'>
                읽고 있는 도서는 이렇게 기포가 생겨나요!
              </span>
            </div>
            <div className='relative z-auto box-border flex h-[55px] w-full justify-center bg-[#B7CEFF] pt-[12px]'>
              <Image
                src='/images/well/wave/default.svg'
                alt='wave'
                width={390}
                height={12}
                className='absolute -top-[12px] left-0 h-[12px] w-full'
                loading='eager'
              />
              <span className='text-body-sm-bold text-[#727384]'>
                다 읽은 책은 이렇게 쌓여요
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
