import { useMutation } from '@tanstack/react-query';
import { useBook } from '@/features/Book';
import { useSession } from 'next-auth/react';
import { flash } from '@/modules/Flash';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { addNewReview } from '../api/review.api';
import { ReviewFormType } from '..';

export const useAddReview = (isbn: string) => {
  const { data: session } = useSession();
  const { bookData } = useBook(isbn);
  const userId = session?.user.id;
  const { handleAddWellItem, wellId, resetWellId } = useAddWellItem(userId);

  const { mutate: handleAddReview } = useMutation({
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
        flash.open({
          flashType: 'review',
          bookTitle: bookData?.title,
          callbackUrl: wellId
            ? `/${userId}/well/${wellId}`
            : `${userId}/well-book/${isbn}/review`,
        });
        resetWellId();
      }
    },
  });

  return { handleAddReview };
};
