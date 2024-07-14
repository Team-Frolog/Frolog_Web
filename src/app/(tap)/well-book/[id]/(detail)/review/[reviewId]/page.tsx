import TitleHeader from '@/components/common/header/TitleHeader';
import ReviewDetail from '@/components/common/review/ReviewDetail';
import React from 'react';

function WellBookReviewPage() {
  return (
    <>
      <TitleHeader />
      <div className='flex h-fit w-full flex-1 flex-col bg-white px-[24px] py-[36px]'>
        <ReviewDetail />
      </div>
    </>
  );
}

export default WellBookReviewPage;
