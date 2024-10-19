import { useMutation } from '@tanstack/react-query';
import { useBook } from '@/features/Book';
import { useSession } from 'next-auth/react';
import { flash } from '@/modules/Flash';
import { ReviewFormType } from '..';
import { addNewReview } from '../api/review.api';
import { useSearchParams } from 'next/navigation';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';

export const useAddReview = (isbn: string) => {
  const { data: session } = useSession();
  const { bookData } = useBook(isbn);
  const wellId = useSearchParams().get('wellId');
  const userId = session?.user.id;
  const { handleAddWellItem } = useAddWellItem(wellId, userId);

  const { mutate: handleAddReview } = useMutation({
    mutationFn: (data: ReviewFormType) => {
      const reqData = {
        writer: userId!,
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
    onSuccess: (res) => {
      if (res.result) {
        handleAddWellItem({ well_id: wellId!, isbn, status: 'reading' });

        flash.open({
          flashType: 'review',
          bookTitle: bookData?.title,
          callbackUrl: `/${userId}/well/${wellId}`,
        });
      }
    },
  });

  return { handleAddReview };
};
