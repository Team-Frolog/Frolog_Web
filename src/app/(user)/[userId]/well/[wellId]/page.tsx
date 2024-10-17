'use client';

import NavigationBar from '@/components/NavigationBar';
import { WellBookList, WellHeader, WellTitle } from '@/features/Well';
import { useWell } from '@/features/Well/hooks/useWell';
import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import React from 'react';

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

function UserWellDetailPage({ params: { userId, wellId } }: Props) {
  const { data: session } = useSession();
  const isRootUser = userId === session?.user.id;
  const { well } = useWell(wellId);

  if (!well) return <></>;

  return (
    <>
      <MainLayout
        extraClass={`bg-[url('/images/well/bg/well-bg-1.svg')] bg-gray-300`}
      >
        <WellHeader hasEditButton={isRootUser} />
        <WellTitle title={well.name} />
        <WellBookList userId={userId} wellData={well} />
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default UserWellDetailPage;
