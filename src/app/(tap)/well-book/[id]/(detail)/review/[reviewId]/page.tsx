'use client';

import TitleHeader from '@/components/common/header/TitleHeader';
import ReviewDetail from '@/components/common/review/ReviewDetail';
import ReviewForm from '@/components/common/review/ReviewForm';
import { ReviewForm as ReviewFormType } from '@/types/form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  params: {
    id: string;
  };
}

function WellBookReviewPage({ params: { id } }: Props) {
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
          buttonType={isEditing ? 'submit' : 'button'}
          isDisabled={isDisabled}
          onClick={() => router.push(`${pathname}?edit=true`)}
        />
        <div className='flex h-fit w-full flex-1 flex-col px-[24px] py-[36px]'>
          {isEditing ? (
            <ReviewForm type='edit' bookId={id} />
          ) : (
            <ReviewDetail />
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default WellBookReviewPage;
