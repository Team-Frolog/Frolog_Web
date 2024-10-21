'use client';

import NavigationBar from '@/components/NavigationBar';
import { WellBookList, WellHeader } from '@/features/Well';
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
  const isDefaultWell = session?.user.defaultWellId === wellId;
  const { well } = useWell(wellId);

  if (!well) return <></>;

  return (
    <>
      <MainLayout extraClass={`bg-shape-${well.shape} bg-gray-300`}>
        <WellHeader
          userId={userId}
          wellId={wellId}
          hasEditButton={isRootUser}
        />
        <WellBookList
          userId={userId}
          isRootUser={isRootUser}
          wellData={well}
          isDefaultWell={isDefaultWell}
        />
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default UserWellDetailPage;
