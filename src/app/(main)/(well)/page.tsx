import React from 'react';
import { WellHeader, WellBookList } from '@/features/Well';

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
