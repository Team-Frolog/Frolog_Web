import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import StoreHeader from '@/components/Header/StoreHeader';

interface Props {
  children: React.ReactNode;
}

function StoreLayout({ children }: Props) {
  return (
    <>
      <StoreHeader />
      <MainLayout extraClass='px-page pt-[16px] gap-[40px] bg-white'>
        {children}
      </MainLayout>
    </>
  );
}

export default StoreLayout;
