import WellHeader from '@/components/wellPage/WellHeader';
import React from 'react';
import FrogOnBook from '@/components/wellPage/FrogOnBook';

function WellPage() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-end'>
      <WellHeader />
      <div className='flex w-full flex-col items-center'>
        <FrogOnBook />
        <div className='h-[12px] w-full rounded-t-[20px] bg-gray-900' />
      </div>
    </div>
  );
}

export default WellPage;