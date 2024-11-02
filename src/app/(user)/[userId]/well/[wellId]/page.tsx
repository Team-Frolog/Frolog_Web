'use client';

import ScrollToTop from '@/components/Button/ScrollToTop';
import NavigationBar from '@/components/NavigationBar';
import { WellHeader } from '@/features/Well';
import WellItemList from '@/features/Well/components/Well/WellItem/WellItemList';
import { useWell } from '@/features/Well/hooks/useWell';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
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
  const { isRendering, containerRef } = useScrollToTop();

  return (
    <>
      <MainLayout
        ref={containerRef}
        extraClass={`bg-shape-${well?.shape} bg-gray-300 overscroll-none`}
      >
        <WellHeader
          userId={userId}
          wellId={wellId}
          hasEditButton={isRootUser}
          hasBackButton={!isDefaultWell}
        />
        {well && (
          <WellItemList
            isRootUser={isRootUser}
            wellData={well}
            isDefaultWell={isDefaultWell}
          />
        )}
        {isRendering && <ScrollToTop />}
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default UserWellDetailPage;
