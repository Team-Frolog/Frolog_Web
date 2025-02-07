'use client';

import { useEffect } from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UseFormReset, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { bottomSheet } from '@/modules/BottomSheet';
import { QUERY_KEY } from '@/constants/query';
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

/** 리뷰 상세 쿼리 훅 */
export const useReviewDetail = ({
  bookId,
  reviewId,
  reset,
  pathname,
  isDirty,
  watch,
  setError,
}: Props) => {
  const { replace, router } = useCustomRouter('well');
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [QUERY_KEY.reviewDetail, reviewId],
    queryFn: () => getReviewDetail(reviewId),
    staleTime: 0,
  });

  const { data: bookData } = useQuery({
    queryKey: [QUERY_KEY.bookInfo, bookId],
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
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.reviewDetail, reviewId],
      });
      replace(pathname);
      router.back();
    },
  });

  /** 리뷰 수정 시 폼 작성 완료 핸들러 */
  const handleSubmitForm = async (formData: ReviewForm) => {
    const { rating, pros, oneLiner, review } = formData;

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

    handleEditReview(formData);
  };

  // 컴포넌트 마운트 후 리뷰 폼 데이터 세팅
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

  /** 리뷰 폼이 변경된 경우 바텀시트로 이탈을 재확인하는 뒤로가기 핸들러 */
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

  /** 리뷰 폼 각 필드에 대한 유효성 검사 핸들러 */
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

  return {
    handleError,
    reviewDetail: data,
    bookTitle: bookData?.title || '',
    handleSubmitForm,
    handleClickBack,
  };
};
