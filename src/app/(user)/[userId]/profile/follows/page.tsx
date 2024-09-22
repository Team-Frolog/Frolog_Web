import TitleHeader from '@/components/Header/TitleHeader';
import { FollowList } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function FollowsPage() {
  return (
    <>
      <TitleHeader
        type='default'
        theme='light'
        title='홍길동과고길동과도라에몽'
      />
      <MainLayout>
        <FollowList />
      </MainLayout>
    </>
  );
}

export default FollowsPage;
