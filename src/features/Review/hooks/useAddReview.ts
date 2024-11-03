import { useEffect, useState } from 'react';
import { UseFormSetError, UseFormWatch } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useFlash } from '@/hooks/useFlash';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { addNewReview } from '../api/review.api';
import { ReviewFormType } from '..';

export const useAddReview = (
  userId: string,
  wellId: string,
  isbn: string,
  watch: UseFormWatch<ReviewFormType>,
  setError: UseFormSetError<ReviewFormType>
) => {
  const { openFlash } = useFlash();
  const { handleAddWellItem, resetAll } = useAddWellItem(userId);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const {
    mutate: handleAddReview,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: ReviewFormType) => {
      setIsLoading(true);
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

  const handleSubmitForm = async (data: ReviewFormType) => {
    const { rating, pros, cons, oneLiner, review } = data;

    // rating 유효성 검사
    if (!rating) {
      setError(
        'rating',
        { type: 'validate', message: '별점을 선택해주세요' },
        { shouldFocus: true }
      );
    }
    if (!pros.length) {
      setError(
        'pros',
        { type: 'validate', message: '장점을 선택해주세요' },
        { shouldFocus: true }
      );
    }
    if (!cons.length) {
      setError(
        'cons',
        { type: 'validate', message: '단점을 선택해주세요' },
        { shouldFocus: true }
      );
    }

    if (
      !rating ||
      !pros.length ||
      !cons.length ||
      oneLiner.length < 10 ||
      review.length < 10
    ) {
      return;
    }

    handleAddReview(data);
  };

  const handleError = () => {
    const rating = watch('rating');
    const pros = watch('pros');
    const cons = watch('cons');

    // rating 유효성 검사
    if (!rating) {
      setError(
        'rating',
        { type: 'validate', message: '별점을 선택해주세요' },
        { shouldFocus: true }
      );
    }
    if (!pros.length) {
      setError(
        'pros',
        { type: 'validate', message: '장점을 선택해주세요' },
        { shouldFocus: true }
      );
    }
    if (!cons.length) {
      setError(
        'cons',
        { type: 'validate', message: '단점을 선택해주세요' },
        { shouldFocus: true }
      );
    }
  };

  return { handleSubmitForm, handleError, isPending, isSuccess, isLoading };
};
