import { useMutation } from '@tanstack/react-query';
import { useFlash } from '@/hooks/useFlash';
import { useSession } from 'next-auth/react';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { addNewReview } from '../api/review.api';
import { ReviewFormType } from '..';

export const useAddReview = (isbn: string) => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const { openFlash } = useFlash();
  const { handleAddWellItem, wellId } = useAddWellItem(userId);

  const {
    mutate: handleAddReview,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: ReviewFormType) => {
      const reqData = {
        writer: userId!,
        isbn,
        tags_pos: data.pros,
        tags_neg: data.cons,
        title: data.oneLiner,
        content: data.review,
        rating: data.rating!,
      };

      const result = await addNewReview(reqData);
      return result;
    },
    onSuccess: (res) => {
      if (res.result) {
        if (wellId) {
          handleAddWellItem({ well_id: wellId, isbn, status: 'done' });
        }
        openFlash({
          type: 'review',
          callbackUrl: wellId
            ? `/${userId}/well/${wellId}`
            : `/${userId}/well/${wellId}/book/${isbn}/review`,
        });
      }
    },
  });

  return { handleAddReview, isPending, isSuccess };
};
