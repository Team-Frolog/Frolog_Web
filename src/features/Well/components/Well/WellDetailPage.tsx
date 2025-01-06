'use client';

import React from 'react';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import MainLayout from '@/layouts/MainLayout';
import { useWell } from '../../hooks/useWell';
import WellItemList from './WellItem/WellItemList';
import WellHeader from './WellHeader';

interface Props {
  /** 우물 소유 유저 id */
  userId: string;
  /** 우물 id */
  wellId: string;
  /** 현재 세션에 로그인 된 유저의 id */
  sessionUserId?: string;
  /** 현재 세션에 로그인 된 유저의 기본 우물 id */
  defaultWellId?: string | null;
}

/** 우물 상세 페이지 */
function WellDetailPage({
  userId,
  wellId,
  sessionUserId,
  defaultWellId,
}: Props) {
  const isRootUser = userId === sessionUserId;
  const isDefaultWell = defaultWellId === wellId;
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
        {isRendering && (
          <ScrollToTop isOnNav={isRootUser ? 'nav' : 'floating'} />
        )}
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default WellDetailPage;
