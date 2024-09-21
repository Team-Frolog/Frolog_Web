import { SideWellHeader, WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function WellListPage() {
  return (
    <>
      <MainLayout>
        <SideWellHeader />
        <WellList />
      </MainLayout>
    </>
  );
}

export default WellListPage;
