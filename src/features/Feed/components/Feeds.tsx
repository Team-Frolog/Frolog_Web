'use client';

import React from 'react';
import PullToRefresh from '@/components/Gesture/PullToRefresh';
import SideHeader from '@/components/Header/SideHeader';
import MainLayout from '@/layouts/MainLayout';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import FeedList from './FeedList/FeedList';

function Feeds() {
  const { isRendering, containerRef } = useScrollToTop();

  return (
    <>
      <SideHeader />
      <div className='flex w-full flex-1 flex-col overflow-hidden'>
        <MainLayout
          ref={containerRef}
          extraClass='bg-gray-300 overflow-auto scrollbar-hide'
        >
          <PullToRefresh element={containerRef} />
          <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
            <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
              피드
            </h1>
          </div>
          <FeedList />

          {isRendering && <ScrollToTop />}
        </MainLayout>
      </div>
    </>
  );
}

export default Feeds;
