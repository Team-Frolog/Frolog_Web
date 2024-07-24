import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UseFormReset } from 'react-hook-form';
import { getReviewDetail } from '../api/review.api';
import { ReviewForm } from '../types/review';

export const useReviewDetail = (
  reviewId: string,
  reset: UseFormReset<ReviewForm>
) => {
  const { data } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });

  useEffect(() => {
    if (data) {
      reset({
        rating: data.rating,
        oneLiner: data.title,
        review: data.content,
        pros: data.tags_pos,
        cons: data.tags_neg,
      });
    }
  }, [data, reset]);

  return {};
};
