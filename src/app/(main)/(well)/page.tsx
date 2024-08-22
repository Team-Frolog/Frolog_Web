import React from 'react';
import { WellHeader, WellBookList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';

function WellPage() {
  return (
    <div className='flex-col-center w-full flex-1 justify-end overflow-hidden bg-white text-gray-800'>
      <WellHeader />
      <MainLayout extraClass='justify-end'>
        <WellBookList />
        <WellBookList />
        <WellBookList />
        <div className='h-[12px] w-full rounded-t-[20px] bg-gray-900' />
      </MainLayout>
    </div>
  );
}

export default WellPage;
