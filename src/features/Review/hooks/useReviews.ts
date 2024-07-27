import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SearchReviewRes } from '@frolog/frolog-api';
import { deleteReview, getReviewList } from '../api/review.api';

export const useReviews = (bookId: string) => {
  const [reviewId, setReviewId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, isFetched } = useQuery({
    queryKey: ['myReviews'],
    queryFn: () => getReviewList(bookId),
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
    onError: (err, variable, context) => {
      queryClient.setQueryData(['myReviews'], context?.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews'] });
    },
  });

  return {
    deleteReview: mutate,
    reviews: data?.reviews || [],
    isFetched,
    setReviewId,
  };
};
