import { WellBookList, WellHeader, WellTitle } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function UserWellDetailPage() {
  return (
    <MainLayout>
      <WellHeader />
      <WellTitle />
      <WellBookList />
    </MainLayout>
  );
}

export default UserWellDetailPage;
