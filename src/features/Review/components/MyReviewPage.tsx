'use client';

import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import { usePathname, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { ReviewForm as ReviewFormType } from '../types/review';
import { useReviewDetail } from '../hooks/useReviewDetail';
import ReviewForm from './ReviewForm/ReviewForm';
import ReviewDetail from './ReviewDetail';

interface Props {
  params: {
    bookId: string;
    reviewId: string;
  };
}

/** 사용자 본인의 리뷰 페이지 */
function MyReviewPage({ params: { bookId, reviewId } }: Props) {
  const isEditing = !!useSearchParams().get('edit');
  const { navigate, router } = useCustomRouter('well');
  const pathname = usePathname();

  const methods = useForm<ReviewFormType>({
    mode: 'onBlur',
    defaultValues: {
      rating: 0,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });
  const {
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { isDirty },
  } = methods;

  const {
    bookTitle,
    reviewDetail,
    handleSubmitForm,
    handleClickBack,
    handleError,
  } = useReviewDetail({
    bookId,
    reviewId,
    reset,
    pathname,
    isDirty,
    watch,
    setError,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleSubmitForm, handleError)}
        className='safe-screen flex w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          title={bookTitle}
          theme='light'
          type={isEditing ? 'edit' : 'default'}
          isDisabled={false}
          onClick={() => navigate(`${pathname}?edit=true`)}
          onClickBack={
            isEditing ? () => handleClickBack() : () => router.back()
          }
        />
        <div className='flex w-full flex-1 flex-col overflow-auto py-[36px]'>
          {isEditing ? (
            <ReviewForm type='edit' />
          ) : (
            <ReviewDetail reviewDetail={reviewDetail} />
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default MyReviewPage;
