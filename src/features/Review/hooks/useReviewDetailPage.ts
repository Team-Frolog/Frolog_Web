import { useQuery } from '@tanstack/react-query';
import { getReviewDetail } from '../api/review.api';

export const useReviewDetailPage = (reviewId: string) => {
  const { data: reviewDetail } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
    staleTime: 0,
  });

  return { reviewDetail };
};
