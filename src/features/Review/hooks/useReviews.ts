import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { SearchReviewRes } from '@frolog/frolog-api';
import { deleteReview, getReviewList } from '../api/review.api';

/** 리뷰 리스트 쿼리 훅 */
export const useReviews = (bookId: string, userId: string) => {
  const [reviewId, setReviewId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, isFetched } = useSuspenseQuery({
    queryKey: [QUERY_KEY.reviewList, bookId, userId],
    queryFn: () =>
      getReviewList({
        isbn: bookId,
        writer: userId,
      }),
    staleTime: 1000 * 5,
  });

  const { mutate } = useMutation({
    mutationFn: () => deleteReview(reviewId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY.reviewList, bookId, userId],
      });

      const previousReviews = queryClient.getQueryData([
        QUERY_KEY.reviewList,
        bookId,
        userId,
      ]) as SearchReviewRes;

      queryClient.setQueryData(
        [QUERY_KEY.reviewList, bookId, userId],
        previousReviews.reviews.filter((review) => review.id !== reviewId)
      );

      return { previousReviews };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(
        [QUERY_KEY.reviewList, bookId, userId],
        context?.previousReviews
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.reviewList, bookId, userId],
      });
    },
  });

  const isEmpty = data.reviews.length === 0;

  return {
    deleteReview: mutate,
    reviews: data?.reviews || [],
    setReviewId,
    isEmpty,
    isFetched,
  };
};
