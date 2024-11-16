'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UseFormReset, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { bottomSheet } from '@/modules/BottomSheet';
import { editReview, getReviewDetail } from '../api/review.api';
import { ReviewForm } from '../types/review';
import { getBookInfo } from '../api/getBookInfo.api';

interface Props {
  bookId: string;
  reviewId: string;
  reset: UseFormReset<ReviewForm>;
  pathname: string;
  isDirty: boolean;
  watch: UseFormWatch<ReviewForm>;
  setError: UseFormSetError<ReviewForm>;
}

export const useReviewDetail = ({
  bookId,
  reviewId,
  reset,
  pathname,
  isDirty,
  watch,
  setError,
}: Props) => {
  const router = useRouter();

  const { data, refetch } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });

  const { data: bookData } = useQuery({
    queryKey: ['bookInfo', bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
  });

  const { mutate: handleEditReview } = useMutation({
    mutationFn: (formData: ReviewForm) => {
      const reqData = {
        id: reviewId,
        tags_pos: formData.pros,
        tags_neg: formData.cons,
        title: formData.oneLiner,
        content: formData.review,
        rating: formData.rating!,
      };
      const result = editReview(reqData);
      return result;
    },
    onSuccess: () => {
      refetch();
      router.replace(pathname);
      router.back();
    },
  });

  const handleSubmitForm = async (formData: ReviewForm) => {
    const { rating, pros, cons, oneLiner, review } = formData;

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

    handleEditReview(formData);
  };

  useEffect(() => {
    if (data) {
      reset({
        rating: data.rating,
        oneLiner: data.title,
        review: data.content,
        pros: data.tags_pos,
        cons: data.tags_neg,
      });
    }
  }, [data, reset]);

  const handleClickBack = () => {
    if (isDirty) {
      bottomSheet.open({
        sheetKey: 'leave_while_edit',
        onClick: () => {
          setTimeout(() => {
            router.back();
          }, 300);
        },
      });
    } else {
      router.back();
    }
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

  return {
    handleError,
    reviewDetail: data,
    bookTitle: bookData?.title || '',
    handleSubmitForm,
    handleClickBack,
  };
};
