import React from 'react';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/ReviewListSkeleton';
import dynamic from 'next/dynamic';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';

const ReviewList = dynamic(
  () => import('@/features/Review/components/ReviewList/ReviewList'),
  {
    ssr: false,
    loading: () => <ReviewListSkeleton />,
  }
);

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function ReviewPage({ params: { userId, wellId, bookId } }: Props) {
  const { isRootUser } = await getIsRootUser(userId);

  return (
    <ReviewList
      bookId={bookId}
      wellId={wellId}
      userId={userId}
      isRootUser={isRootUser}
    />
  );
}

export default ReviewPage;
