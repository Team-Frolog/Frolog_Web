import React from 'react';
import { Feeds } from '@/features/Feed';
import { Metadata } from 'next';
import WellEntryHeader from '@/components/Header/WellEntryHeader';

export const metadata: Metadata = {
  title: '피드',
  description: '다른 사람들이 작성한 리뷰와 메모 둘러보기',
};

async function FeedPage() {
  return (
    <>
      <WellEntryHeader />
      <div className='flex w-full flex-1 flex-col overflow-hidden bg-gray-300'>
        <Feeds />
      </div>
    </>
  );
}

export default FeedPage;
