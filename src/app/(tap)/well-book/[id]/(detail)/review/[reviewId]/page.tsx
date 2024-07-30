'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import {
  useReviewDetail,
  ReviewDetail,
  ReviewForm,
  ReviewFormType,
} from '@/features/Review';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  params: {
    id: string;
    reviewId: string;
  };
}

function WellBookReviewPage({ params: { id, reviewId } }: Props) {
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
    formState: { isValid },
  } = methods;

  const { bookTitle, reviewDetail, handleEditReview } = useReviewDetail(
    id,
    reviewId,
    reset
  );

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
        onSubmit={handleSubmit((data) => handleEditReview(data, pathname))}
        className='flex h-fit w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          title={bookTitle}
          theme='light'
          type={isEditing ? 'edit' : 'default'}
          isDisabled={isDisabled}
          onClick={() => router.push(`${pathname}?edit=true`)}
        />
        <div className='flex h-fit w-full flex-1 flex-col px-[24px] py-[36px]'>
          {isEditing ? (
            <>
              <ReviewForm type='edit' />
              <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
            </>
          ) : (
            <ReviewDetail reviewDetail={reviewDetail} />
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default WellBookReviewPage;
