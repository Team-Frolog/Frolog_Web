'use client';

import { WellBookList, WellHeader, WellTitle } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function WellPage() {
  return (
    <>
      <MainLayout
        extraClass={`bg-[url('/images/well/bg/well-bg-1.svg')] bg-gray-300`}
      >
        <WellHeader hasEditButton />
        <WellTitle />
        <WellBookList />
      </MainLayout>
    </>
  );
}

export default WellPage;
