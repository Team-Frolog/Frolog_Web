import { PAGES } from '@/constants/page';
import {
  WellActionButton,
  WellHeader,
  WellTitle,
  FrogOnBook,
} from '@/features/Well';
import Wave from '@/features/Well/components/Well/WellItem/Wave';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function DefaultWellPage() {
  return (
    <>
      <MainLayout extraClass='bg-shape-1 bg-gray-300 justify-between'>
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
            <Wave
              title='다 읽은 책은 이렇게 쌓여요'
              category='unknown'
              isReading={false}
              height={55}
            />
            <Wave
              title='읽는 중인 책은 이렇게 쌓여요'
              category='travel'
              isReading
              height={55}
            />
          </div>

          <FrogOnBook zIndex={10} />
        </div>
      </MainLayout>
    </>
  );
}

export default DefaultWellPage;
