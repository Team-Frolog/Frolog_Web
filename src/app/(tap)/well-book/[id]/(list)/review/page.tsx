'use client';

import React, { Suspense } from 'react';
import AddButton from '@/components/Button/AddButton';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/ReviewListSkeleton';
import dynamic from 'next/dynamic';

const ReviewList = dynamic(
  () => import('@/features/Review/components/ReviewList/ReviewList'),
  {
    ssr: false,
    loading: () => <ReviewListSkeleton />,
  }
);

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  return (
    <>
      <div className='add-button-wrapper'>
        <AddButton route={`/new-review?id=${id}`} text='리뷰 추가하기' />
      </div>
      <Suspense fallback={<ReviewListSkeleton />}>
        <ReviewList bookId={id} />
      </Suspense>
    </>
  );
}

export default ReviewPage;
