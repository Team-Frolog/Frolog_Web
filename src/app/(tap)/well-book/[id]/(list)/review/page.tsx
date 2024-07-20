'use client';

import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import { FormProvider, useForm } from 'react-hook-form';
import Splash from '@/components/Splash/Splash';
import { useStackMotionActions } from '@/store/stackMotionStore';
import useSplashStore from '@/store/splashStore';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { ReviewForm, ReviewFormType, ReviewList } from '@/features/Review';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  useScroll();

  const {
    isOpen,
    actions: { changeState },
  } = useSplashStore();
  const { setNewReviewId } = useStackMotionActions();

  const methods = useForm<ReviewFormType>({
    mode: 'onBlur',
    defaultValues: {
      rating: null,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });
  const {
    watch,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const isDisabled =
    !watch('rating') ||
    !watch('oneLiner') ||
    !watch('review') ||
    !watch('pros').length ||
    !watch('cons').length ||
    !isValid;

  const handleAddReview = () => {
    // TODO: 서버 연동
    setNewReviewId('id');
    changeState(true);
  };

  return (
    <div className='w-full flex-1 bg-white'>
      {id === '1' ? (
        <FormProvider {...methods}>
          <form
            className='p-[24px] pt-0'
            onSubmit={handleSubmit(handleAddReview)}
          >
            <ReviewForm type='new' isDisabled={isDisabled} />
            <ConfirmLeaveSheet
              bookId={id}
              sheetData={sheetData.leave_while_review}
            />
          </form>
          {isOpen && <Splash type='review' />}
        </FormProvider>
      ) : (
        <ReviewList />
      )}
    </div>
  );
}

export default ReviewPage;
