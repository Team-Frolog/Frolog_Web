import React, { Suspense } from 'react';
import { ReviewDetailPage } from '@/features/Review';
import { Metadata } from 'next';
import { getReviewDetail } from '@/features/Review/api/review.server.api';
import { getProfile } from '@/features/Profile/api/profile.server.api';

interface Props {
  params: {
    reviewId: string;
  };
}

async function ReviewPage({ params: { reviewId } }: Props) {
  const reviewData = await getReviewDetail(reviewId);
  const profile = await getProfile(reviewData.writer);

  return (
    <Suspense fallback={<></>}>
      <ReviewDetailPage reviewData={reviewData} profile={profile} />
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
