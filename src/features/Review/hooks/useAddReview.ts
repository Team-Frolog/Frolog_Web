import { useMutation } from '@tanstack/react-query';
import { useFlash } from '@/hooks/useFlash';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { addNewReview } from '../api/review.api';
import { ReviewFormType } from '..';

export const useAddReview = (userId: string, wellId: string, isbn: string) => {
  const { openFlash } = useFlash();
  const { handleAddWellItem, resetAll } = useAddWellItem(userId);

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
        handleAddWellItem({ well_id: wellId, isbn, status: 'done' });
        resetAll();
        openFlash({
          type: 'review',
          callbackUrl: `/${userId}/well/${wellId}`,
        });
      }
    },
  });

  return { handleAddReview, isPending, isSuccess };
};
