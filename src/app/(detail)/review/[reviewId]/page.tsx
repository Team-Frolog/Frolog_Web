import React from 'react';
import { ReviewDetailPage } from '@/features/Review';
import { Metadata } from 'next';

interface Props {
  params: {
    reviewId: string;
  };
}

export const metadata: Metadata = {
  title: '독서 리뷰',
};

function ReviewPage({ params: { reviewId } }: Props) {
  return <ReviewDetailPage reviewId={reviewId} />;
}

export default ReviewPage;
