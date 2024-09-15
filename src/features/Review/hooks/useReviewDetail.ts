'use client';

import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { UseFormReset } from 'react-hook-form';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { editReview, getReviewDetail } from '../api/review.api';
import { ReviewForm } from '../types/review';
import { getBookInfo } from '../api/getBookInfo.api';

export const useReviewDetail = (
  bookId: string,
  reviewId: string,
  reset: UseFormReset<ReviewForm>
) => {
  const router = useRouter();

  const { data, refetch } = useQuery({
    queryKey: ['reviewDetail', reviewId],
    queryFn: () => getReviewDetail(reviewId),
  });

  const { data: bookData } = useQuery({
    queryKey: ['bookInfo', bookId],
    queryFn: () => getBookInfo({ isbn: bookId }).then((res) => res),
    refetchOnWindowFocus: false,
  });

  const handleEditReview = async (formData: ReviewForm, pathname: string) => {
    const result = await editReview(reviewId, formData);

    if (result) {
      refetch();
      router.replace(pathname);
    }
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

  const handleClickBack = (formData: ReviewForm) => {
    if (!data) return;

    const defaultValues = {
      rating: data.rating,
      oneLiner: data.title,
      review: data.content,
      pros: data.tags_pos,
      cons: data.tags_neg,
    };

    if (!isEqual(defaultValues, formData)) {
      bottomSheet.open({
        sheetData: sheetData.leave_while_edit,
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

  return {
    reviewDetail: data,
    bookTitle: bookData?.title || '',
    handleEditReview,
    handleClickBack,
  };
};
