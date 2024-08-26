import SideWellHeader from '@/components/Header/SideWellHeader';
import { WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FeedPage() {
  return (
    <>
      <MainLayout extraClass='z-20'>
        <SideWellHeader />
        <WellList />
      </MainLayout>
    </>
  );
}

export default FeedPage;
