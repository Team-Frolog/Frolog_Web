import React from 'react';
import {
  WellHeader,
  WellBookList,
  WellTitle,
  PointingButton,
} from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';

function WellPage() {
  return (
    <>
      <MainLayout extraClass={`bg-[url('/well-bg.svg')] bg-gray-300`}>
        <WellHeader hasEditButton />
        <WellTitle />
        <PointingButton />
        <WellBookList />
      </MainLayout>
    </>
  );
}

export default WellPage;
