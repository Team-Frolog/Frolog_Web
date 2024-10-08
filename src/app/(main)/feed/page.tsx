'use client';

import PullToRefresh from '@/components/Gesture/PullToRefresh';
import FeedSkeleton from '@/components/Fallback/Skeleton/FeedSkeleton';
import SideHeader from '@/components/Header/SideHeader';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

const FeedList = dynamic(
  () => import('@/features/Feed/components/FeedList/FeedList'),
  {
    ssr: false,
    loading: () => (
      <div className='flex w-full flex-col gap-[36px]'>
        <FeedSkeleton />
        <FeedSkeleton />
      </div>
    ),
  }
);

function FeedPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SideHeader />
      <MainLayout ref={containerRef} extraClass='bg-gray-300'>
        <PullToRefresh element={containerRef} />
        <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
          <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
            피드
          </h1>
        </div>
        <FeedList />
      </MainLayout>
    </>
  );
}

export default FeedPage;
