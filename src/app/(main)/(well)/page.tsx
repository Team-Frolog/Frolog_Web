import React from 'react';
import { WellHeader, WellTitle, PointingButton } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { MemoBookmarkIcon } from 'public/icons';
import FrogOnBook from '@/features/Well/components/Well/FrogOnBook';

function WellPage() {
  return (
    <>
      <MainLayout
        extraClass={`bg-[url('/images/well/bg/well-bg-1.svg')] bg-gray-300`}
      >
        <WellHeader hasEditButton />
        <WellTitle title='소중한 나의 첫 우물' />
        <PointingButton />
        <div className='flex w-full flex-1 flex-col-reverse items-center'>
          <div className='flex w-[85%] items-center'>
            <div className={`read-book bg-category-bg-novel`}>
              <div className='read-book-band bg-category-band-novel' />
              <span className='read-book-text'>예시 책</span>
            </div>
            <MemoBookmarkIcon />
          </div>
          <div className='flex w-[85%] items-center'>
            <div className='reading-book border-category-bg-it'>
              <span className='reading-book-text'>예시 책</span>
            </div>
            <MemoBookmarkIcon />
          </div>

          <FrogOnBook />
        </div>
      </MainLayout>
    </>
  );
}

export default WellPage;
