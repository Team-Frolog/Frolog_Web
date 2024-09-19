import React, { Suspense } from 'react';
import AddButton from '@/components/Button/AddButton';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/ReviewListSkeleton';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';

const ReviewList = dynamic(
  () => import('@/features/Review/components/ReviewList/ReviewList'),
  {
    ssr: false,
    loading: () => <ReviewListSkeleton />,
  }
);

interface Props {
  params: {
    userId: string;
    bookId: string;
  };
}

async function ReviewPage({ params: { userId, bookId } }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {userId === session?.user.id && (
        <div className='add-button-wrapper'>
          <AddButton route={`/new-review?id=${bookId}`} text='리뷰 추가하기' />
        </div>
      )}
      <Suspense fallback={<ReviewListSkeleton />}>
        <ReviewList bookId={bookId} userId={userId} />
      </Suspense>
    </>
  );
}

export default ReviewPage;
