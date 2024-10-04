import FeedSkeleton from '@/components/Fallback/Skeleton/FeedSkeleton';
import SideHeader from '@/components/Header/SideHeader';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import React from 'react';

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
  return (
    <MainLayout extraClass='bg-gray-300'>
      <SideHeader title='피드' />
      <FeedList />
    </MainLayout>
  );
}

export default FeedPage;
