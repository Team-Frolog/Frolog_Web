'use client';

import React from 'react';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import { GetWellRes, SearchWellItemRes } from '@frolog/frolog-api';
import MainLayout from '@/layouts/MainLayout';
import WellHeader from './WellHeader';
import WellItemList from './WellItem/WellItemList';

interface Props {
  /** 우물 소유 유저 id */
  userId: string;
  /** 우물 id */
  initialWellItemList: SearchWellItemRes;
  /** 우물 상세 정보 */
  wellDetail: GetWellRes;
  /** 현재 세션에 로그인 된 유저의 id */
  sessionUserId?: string;
  /** 현재 세션에 로그인 된 유저의 기본 우물 id */
  defaultWellId?: string | null;
}

/** 우물 상세 페이지 */
function WellDetailPage({
  userId,
  initialWellItemList,
  wellDetail,
  sessionUserId,
  defaultWellId,
}: Props) {
  const isRootUser = userId === sessionUserId;
  const isDefaultWell = defaultWellId === wellDetail.id;
  const { isRendering } = useScrollToTop();

  return (
    <>
      <MainLayout
        extraClass={`bg-shape-${wellDetail?.shape} bg-gray-300 overscroll-none`}
      >
        <WellHeader
          userId={userId}
          wellId={wellDetail.id}
          isRootUser={isRootUser}
          hasBackButton={!isDefaultWell}
        />
        {wellDetail && (
          <WellItemList
            isRootUser={isRootUser}
            wellData={wellDetail}
            isDefaultWell={isDefaultWell}
            initialWellItemList={initialWellItemList}
          />
        )}
        {isRendering && <ScrollToTop />}
      </MainLayout>
      <NavigationBar />
    </>
  );
}

export default WellDetailPage;
