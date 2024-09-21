import { ReviewDetail } from '@/features/Review';
import { getReviewDetail } from '@/features/Review/api/review.api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface Props {
  params: {
    reviewId: string;
  };
}

function ReviewPage({ params: { reviewId } }: Props) {
  const { data: reviewDetail } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });

  return <ReviewDetail reviewDetail={reviewDetail} />;
}

export default ReviewPage;
