'use client';

import React from 'react';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/layouts/MainLayout';
import { useWell } from '../../hooks/useWell';
import WellDetail from './WellDetail';

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
  const { isRendering } = useScrollToTop();
  const isMovable = useSearchParams().get('mode') === 'movable';

  return (
    <>
      <MainLayout
        extraClass={`bg-shape-${well?.shape} bg-gray-300 overscroll-none`}
      >
        {well && (
          <WellDetail
            isRootUser={isRootUser}
            wellData={well}
            isDefaultWell={isDefaultWell}
            isMovable={isMovable}
            userId={userId}
          />
        )}
        {isRendering && <ScrollToTop />}
      </MainLayout>
      <NavigationBar />
    </>
  );
}

export default WellDetailPage;
