'use client';

import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import {
  useReviewDetail,
  ReviewDetail,
  ReviewForm,
  ReviewFormType,
} from '@/features/Review';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  params: {
    bookId: string;
    reviewId: string;
  };
}

function WellBookReviewPage({ params: { bookId, reviewId } }: Props) {
  const isEditing = !!useSearchParams().get('edit');
  const router = useRouter();
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
    formState: { isValid, isDirty },
  } = methods;

  const { bookTitle, reviewDetail, handleEditReview, handleClickBack } =
    useReviewDetail({ bookId, reviewId, reset, pathname, isDirty });

  const isDisabled =
    !watch('rating') ||
    !watch('oneLiner') ||
    !watch('review') ||
    !watch('pros').length ||
    !watch('cons').length ||
    !isValid;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => handleEditReview(data))}
        className='flex h-dvh w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          title={bookTitle}
          theme='light'
          type={isEditing ? 'edit' : 'default'}
          isDisabled={isDisabled}
          onClick={() => router.push(`${pathname}?edit=true`)}
          onClickBack={() => handleClickBack()}
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

export default WellBookReviewPage;
