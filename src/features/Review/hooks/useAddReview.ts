import { useMutation } from '@tanstack/react-query';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { useSession } from 'next-auth/react';
import { ReviewFormType } from '..';
import { addNewReview } from '../api/review.api';

export const useAddReview = (isbn: string, openSplash: () => void) => {
  const { data: session } = useSession();
  const { setNewReviewId } = useStackMotionActions();

  const { mutate: handleAddReview } = useMutation({
    mutationFn: (data: ReviewFormType) => {
      const reqData = {
        writer: session!.user.id,
        isbn,
        tags_pos: data.pros,
        tags_neg: data.cons,
        title: data.oneLiner,
        content: data.review,
        rating: data.rating!,
      };

      const result = addNewReview(reqData);
      return result;
    },
    onSuccess: (result) => {
      setNewReviewId(result.id!);
      openSplash();
    },
  });

  return { handleAddReview };
};
