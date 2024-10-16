import { WellBookList, WellHeader, WellTitle } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

interface Props {
  params: {
    userId: string;
  };
}

function UserWellDetailPage({ params: { userId } }: Props) {
  return (
    <MainLayout
      extraClass={`bg-[url('/images/well/bg/well-bg-1.svg')] bg-gray-300`}
    >
      <WellHeader />
      <WellTitle />
      <WellBookList userId={userId} />
    </MainLayout>
  );
}

export default UserWellDetailPage;
