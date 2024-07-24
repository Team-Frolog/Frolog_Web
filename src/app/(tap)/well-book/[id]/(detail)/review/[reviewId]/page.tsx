'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import {
  useReviewDetail,
  ReviewDetail,
  ReviewForm,
  ReviewFormType,
  editReview,
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
  console.log(id);
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

  useReviewDetail(reviewId, reset);

  const handleEditReview = async (data: ReviewFormType) => {
    const result = await editReview(reviewId, data);

    if (result) {
      router.replace(pathname);
    }
  };

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
        onSubmit={handleSubmit(handleEditReview)}
        className='flex h-fit w-full flex-1 flex-col bg-white'
      >
        <TitleHeader
          type={isEditing ? 'edit' : 'default'}
          isDisabled={isDisabled}
          onClick={() => router.replace(`${pathname}?edit=true`)}
        />
        <div className='flex h-fit w-full flex-1 flex-col px-[24px] py-[36px]'>
          {isEditing ? (
            <>
              <ReviewForm type='edit' />
              <ConfirmLeaveSheet sheetData={sheetData.leave_while_edit} />
            </>
          ) : (
            <ReviewDetail />
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default WellBookReviewPage;
