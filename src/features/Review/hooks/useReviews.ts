import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { SearchReviewRes } from '@frolog/frolog-api';
import { deleteReview, getReviewList } from '../api/review.api';

export const useReviews = (bookId: string, userId: string) => {
  const [reviewId, setReviewId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, isFetched } = useSuspenseQuery({
    queryKey: ['reviews', bookId, userId],
    queryFn: () =>
      getReviewList({
        isbn: bookId,
        writer: userId,
      }),
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: () => deleteReview(reviewId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ['reviews', bookId, userId],
      });

      const previousReviews = queryClient.getQueryData([
        'reviews',
        bookId,
        userId,
      ]) as SearchReviewRes;

      queryClient.setQueryData(
        ['reviews', bookId, userId],
        previousReviews.reviews.filter((review) => review.id !== reviewId)
      );

      return { previousReviews };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(
        ['reviews', bookId, userId],
        context?.previousReviews
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['reviews', bookId, userId],
      });
    },
  });

  const isEmpty = !data?.reviews?.length;

  return {
    deleteReview: mutate,
    reviews: data?.reviews || [],
    setReviewId,
    isEmpty,
    isFetched,
  };
};
