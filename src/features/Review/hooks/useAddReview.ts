import { useEffect, useState } from 'react';
import { UseFormSetError, UseFormWatch } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/modules/Toast';
import { ERROR_ALERT } from '@/constants/message';
import { useFlash } from '@/hooks/useFlash';
import { useAddWellItem } from '@/features/Well/hooks/useAddWellItem';
import { addNewReview } from '../api/review.api';
import { ReviewFormType } from '..';

/** 리뷰 작성 핸들링 훅 */
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

  const { mutate: handleAddReview } = useMutation({
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
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
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

  /** 리뷰 폼 작성 완료 후 각 필드에 대한 개별 유효성 검사 */
  const handleSubmitForm = async (data: ReviewFormType) => {
    const { rating, pros, oneLiner, review } = data;

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

    if (!rating || !pros.length || oneLiner.length < 10 || review.length < 10) {
      return;
    }

    handleAddReview(data);
  };

  /** 각 필드에 대한 유효성 검사 핸들러 */
  const handleError = () => {
    const rating = watch('rating');
    const pros = watch('pros');

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
  };

  return { handleSubmitForm, handleError, isLoading };
};
