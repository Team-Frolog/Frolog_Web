import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import WellSearchItem from './WellSearchItem';

function WellSearchResult() {
  return (
    <MainLayout extraClass='gap-[36px] pb-[36px] pt-[24px] bg-gray-300'>
      <WellSearchItem />
      <WellSearchItem />
      <WellSearchItem />
    </MainLayout>
  );
}

export default WellSearchResult;
