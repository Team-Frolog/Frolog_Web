import { SideWellHeader, WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function UserWellListPage() {
  return (
    <>
      <MainLayout>
        <SideWellHeader username='홍길동과고길동과도라에몽' />
        <WellList />
      </MainLayout>
    </>
  );
}

export default UserWellListPage;
