'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { ReviewDetail, ReviewForm, ReviewFormType } from '@/features/Review';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  params: {
    id: string;
  };
}

function WellBookReviewPage({ params: { id } }: Props) {
  console.log(id);
  const isEditing = !!useSearchParams().get('edit');
  const router = useRouter();
  const pathname = usePathname();
  const methods = useForm<ReviewFormType>({
    mode: 'onBlur',
    defaultValues: {
      rating: 4.5,
      oneLiner: 'dddd',
      review: 'ddd',
      pros: ['easy', 'squeeze_time', 'smart'],
      cons: ['biased', 'disarrayed', 'hard_terms'],
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
  }, []);

  const handleEditReview = () => {
    // TODO: 서버 연동
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
          onClick={() => router.push(`${pathname}?edit=true`)}
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
