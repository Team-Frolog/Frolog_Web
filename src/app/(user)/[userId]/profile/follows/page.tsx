import TitleHeader from '@/components/Header/TitleHeader';
import { FollowList } from '@/features/Profile';
import React from 'react';

function FollowsPage() {
  return (
    <>
      <TitleHeader
        type='default'
        theme='light'
        title='홍길동과고길동과도라에몽'
      />
      <FollowList />
    </>
  );
}

export default FollowsPage;
