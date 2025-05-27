import React, { Suspense } from 'react';
import { ReviewDetailPage } from '@/features/Review';
import { Metadata } from 'next';
import { getReviewDetail } from '@/features/Review/api/review.server.api';
import { getProfile } from '@/features/Profile/api/profile.server.api';
import { getBookInfo } from '@/features/Book/api/book.server.api';

interface Props {
  params: {
    reviewId: string;
  };
}

async function ReviewPage({ params: { reviewId } }: Props) {
  const reviewData = await getReviewDetail(reviewId);
  const [profile, bookData] = await Promise.all([
    getProfile(reviewData.writer),
    getBookInfo(reviewData.isbn)
  ]);

  return (
    <Suspense fallback={<></>}>
      <ReviewDetailPage reviewData={reviewData} bookData={bookData} profile={profile} />
    </Suspense>
  );
}

export default ReviewPage;

export const metadata: Metadata = {
  title: '리뷰',
  openGraph: {
    title: '리뷰',
  },
  twitter: {
    title: '리뷰',
  },
};
