'use client';

import React, { useRef } from 'react';
import PullToRefresh from '@/components/Gesture/PullToRefresh';
import SideHeader from '@/components/Header/SideHeader';
import MainLayout from '@/layouts/MainLayout';
import FeedList from './FeedList/FeedList';

function Feeds() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SideHeader />
      <MainLayout extraClass='bg-gray-300 overflow-hidden'>
        <div
          ref={containerRef}
          className='flex w-full flex-1 flex-col overflow-auto scrollbar-hide'
        >
          <PullToRefresh element={containerRef} />
          <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
            <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
              피드
            </h1>
          </div>
          <FeedList />
        </div>
      </MainLayout>
    </>
  );
}

export default Feeds;
