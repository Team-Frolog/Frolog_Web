import React from 'react';
import { WellHeader, WellBookList } from '@/features/Well';

function WellPage() {
  return (
    <div className='flex-col-center h-fit w-full flex-1 justify-end bg-white text-gray-800'>
      <WellHeader />
      <div className='flex-col-center w-full flex-1 justify-end'>
        <WellBookList />
        <div className='h-[12px] w-full rounded-t-[20px] bg-gray-900' />
      </div>
    </div>
  );
}

export default WellPage;
