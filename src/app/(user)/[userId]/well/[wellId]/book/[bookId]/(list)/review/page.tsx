import React, { Suspense } from 'react';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import { Metadata } from 'next';
import { ReviewList } from '@/features/Review';
import { getReviewList } from '@/features/Review/api/review.server.api';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/Review/ReviewListSkeleton';

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function ReviewPage({ params: { userId, wellId, bookId } }: Props) {
  const { isRootUser } = await getIsRootUser(userId);
  const reviewList = await getReviewList(bookId, userId);

  return (
    <Suspense fallback={<ReviewListSkeleton />}>
      <ReviewList
        bookId={bookId}
        wellId={wellId}
        userId={userId}
        reviewList={reviewList}
        isRootUser={isRootUser}
      />
    </Suspense>
  );
}

export default ReviewPage;

export const metadata: Metadata = {
  title: '리뷰 목록',
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
  openGraph: {
    title: '리뷰 목록',
  },
  twitter: {
    title: '리뷰 목록',
  },
};
