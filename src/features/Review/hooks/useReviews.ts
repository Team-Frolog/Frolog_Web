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

  const { data } = useSuspenseQuery({
    queryKey: ['myReviews'],
    queryFn: () => getReviewList(bookId),
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: () => deleteReview(reviewId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['myReviews'] });

      const previousReviews = queryClient.getQueryData([
        'myReviews',
      ]) as SearchReviewRes;

      queryClient.setQueryData(
        ['myReviews'],
        previousReviews.reviews.filter((review) => review.id !== reviewId)
      );

      return { previousReviews };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(['myReviews'], context?.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews'] });
    },
  });

  const isEmpty = data?.reviews?.length === 0;

  return {
    deleteReview: mutate,
    reviews: data?.reviews || [],
    setReviewId,
    isEmpty,
  };
};
