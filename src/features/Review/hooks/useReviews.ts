import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { SearchReviewRes } from '@frolog/frolog-api';
import { deleteReview, getReviewList } from '../api/review.api';

export const useReviews = (bookId: string) => {
  const [reviewId, setReviewId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, isFetched } = useSuspenseQuery({
    queryKey: ['myReviews', bookId],
    queryFn: () => getReviewList(bookId),
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: () => deleteReview(reviewId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['myReviews', bookId] });

      const previousReviews = queryClient.getQueryData([
        'myReviews',
        bookId,
      ]) as SearchReviewRes;

      queryClient.setQueryData(
        ['myReviews', bookId],
        previousReviews.reviews.filter((review) => review.id !== reviewId)
      );

      return { previousReviews };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(['myReviews', bookId], context?.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews', bookId] });
    },
  });

  const isEmpty = data?.reviews?.length === 0;

  return {
    deleteReview: mutate,
    reviews: data?.reviews || [],
    setReviewId,
    isEmpty,
    isFetched,
  };
};
