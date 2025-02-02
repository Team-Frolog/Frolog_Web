import React from 'react';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout extraClass='bg-gray-300'>
      <SideWellHeader hasStoreButton bgColor='bg-gray-300' />
      {children}
    </MainLayout>
  );
}

export default HomeLayout;
