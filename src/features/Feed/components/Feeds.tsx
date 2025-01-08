'use client';

import React from 'react';
import PullToRefresh from '@/components/Gesture/PullToRefresh';
import WellEntryHeader from '@/components/Header/WellEntryHeader';
import MainLayout from '@/layouts/MainLayout';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import FeedList from './FeedList/FeedList';

/** 피드 페이지 컴포넌트 */
function Feeds() {
  const { isRendering, containerRef } = useScrollToTop();

  return (
    <>
      <WellEntryHeader />
      <div className='flex w-full flex-1 flex-col overflow-hidden bg-gray-300'>
        <MainLayout
          ref={containerRef}
          extraClass='overflow-auto scrollbar-hide'
        >
          <PullToRefresh element={containerRef} />
          <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
            <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
              피드
            </h1>
          </div>
          <FeedList />
        </MainLayout>
      </div>
      {isRendering && <ScrollToTop />}
    </>
  );
}

export default Feeds;
