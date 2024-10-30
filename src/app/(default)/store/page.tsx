import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { StoreHeader, FrogList } from '@/features/Store';

function StorePage() {
  return (
    <>
      <StoreHeader />
      <MainLayout extraClass='bg-white px-page pt-[16px]'>
        <FrogList />
      </MainLayout>
    </>
  );
}

export default StorePage;
