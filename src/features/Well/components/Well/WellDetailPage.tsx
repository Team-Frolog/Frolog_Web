'use client';

import React from 'react';
import ScrollToTop from '@/components/Button/ScrollToTop';
import NavigationBar from '@/components/NavigationBar';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import { useWell } from '../../hooks/useWell';
import WellItemList from './WellItem/WellItemList';
import WellHeader from './WellHeader';

interface Props {
  userId: string;
  wellId: string;
}

function WellDetailPage({ userId, wellId }: Props) {
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

export default WellDetailPage;