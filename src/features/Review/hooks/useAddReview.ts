import { useMutation } from '@tanstack/react-query';
import { useBook } from '@/features/Book';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { useSession } from 'next-auth/react';
import { flash } from '@/modules/Flash';
import { ReviewFormType } from '..';
import { addNewReview } from '../api/review.api';

export const useAddReview = (isbn: string) => {
  const { data: session } = useSession();
  const { bookData } = useBook(isbn);
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
      flash.open({
        flashType: 'review',
        bookTitle: bookData?.title,
        callbackUrl: `/`,
      }); // TODO: 우물 id 가져와서 적용
    },
  });

  return { handleAddReview };
};
