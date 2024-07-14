'use client';

import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import ReviewForm from '@/components/common/review/ReviewForm';
import ReviewList from '@/components/common/review/ReviewList';
import { FormProvider, useForm } from 'react-hook-form';
import Splash from '@/components/common/splash/Splash';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { ReviewForm as ReviewFormType } from '@/types/form';
import useSplashStore from '@/store/splashStore';

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

  const handleAddReview = () => {
    // TODO: 서버 연동
    setNewReviewId('id');
    changeState(true);
  };

  return (
    <div className='w-full flex-1 bg-white'>
      {id === '1' ? (
        <FormProvider {...methods}>
          <form className='p-[24px] pt-0'>
            <ReviewForm
              type='new'
              bookId={id}
              handleSubmitForm={handleAddReview}
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
