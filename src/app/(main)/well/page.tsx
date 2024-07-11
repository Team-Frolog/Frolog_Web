import WellBookList from '@/components/common/book/WellBookList';
import WellHeader from '@/components/wellPage/WellHeader';
import React from 'react';

function WellPage() {
  return (
    <div className='flex h-fit w-full flex-1 flex-col items-center justify-end bg-white text-gray-800'>
      <WellHeader />
      <div className='flex w-full flex-1 flex-col items-center justify-end'>
        <WellBookList />
        <div className='h-[12px] w-full rounded-t-[20px] bg-gray-900' />
      </div>
    </div>
  );
}

export default WellPage;
