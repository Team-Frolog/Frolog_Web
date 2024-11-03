import React from 'react';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/ReviewListSkeleton';
import dynamic from 'next/dynamic';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '리뷰',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

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
