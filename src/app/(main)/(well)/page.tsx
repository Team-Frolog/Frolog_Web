import React from 'react';
import { WellHeader, WellBookList, WellTitle } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';

function WellPage() {
  return (
    <MainLayout extraClass='justify-end'>
      <WellHeader />
      <WellTitle />
      <WellBookList />
      <div className='h-[12px] w-full shrink-0 rounded-t-[20px] bg-gray-900' />
    </MainLayout>
  );
}

export default WellPage;
