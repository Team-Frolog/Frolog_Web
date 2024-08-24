import SideWellHeader from '@/components/Header/SideWellHeader';
import { WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <>
      <MainLayout>
        <SideWellHeader />
        <WellList />
      </MainLayout>
    </>
  );
}

export default FeedPage;
