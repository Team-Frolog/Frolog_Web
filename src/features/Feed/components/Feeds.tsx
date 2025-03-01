'use client';

import React, { useRef } from 'react';
import PullToRefresh from '@/components/Gesture/PullToRefresh';
import MainLayout from '@/layouts/MainLayout';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import FeedList from './FeedList/FeedList';

/** 피드 페이지 컴포넌트 */
function Feeds() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isRendering } = useScrollToTop();

  return (
    <>
      <MainLayout ref={ref} extraClass='overflow-auto scrollbar-hide'>
        <PullToRefresh element={ref} />
        <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
          <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
            피드
          </h1>
        </div>
        <FeedList />
      </MainLayout>
      {isRendering && <ScrollToTop />}
    </>
  );
}

export default Feeds;
