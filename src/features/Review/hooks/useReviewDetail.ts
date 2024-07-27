import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UseFormReset } from 'react-hook-form';
import { getReviewDetail } from '../api/review.api';
import { ReviewForm } from '../types/review';
import { getBookInfo } from '../api/getBookInfo.api';

export const useReviewDetail = (
  bookId: string,
  reviewId: string,
  reset: UseFormReset<ReviewForm>
) => {
  const { data } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });

  const { data: bookData } = useQuery({
    queryKey: ['bookInfo', bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
    refetchOnWindowFocus: false,
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

  return { bookTitle: bookData?.title || '' };
};
