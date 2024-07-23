'use client';

import BookInfo from '@/components/Book/BookInfo';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import Splash from '@/components/Splash/Splash';
import { sheetData } from '@/data/ui/bottomSheet';
import { splash } from '@/data/ui/splash';
import { ReviewForm, ReviewFormType } from '@/features/Review';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useSplash } from '@/hooks/popup/useSplash';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { usePopUpActions } from '@/store/popUpStore';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function NewReviewPage() {
  useScroll({ categoryColor: undefined });
  const bookId = useSearchParams().get('id');
  const { isOpen, setIsOpen } = useSplash(splash.review.route);
  const { setNewReviewId } = useStackMotionActions();
  const { changePopUpState } = usePopUpActions();

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
    setIsOpen(true);
  };

  if (!bookId) return null;

  return (
    <>
      <ResponsiveHeaderLayout
        onClick={() => changePopUpState('isOpenAlertSheet', true)}
      >
        <></>
      </ResponsiveHeaderLayout>
      <BookInfo bookId={bookId} />
      <FormProvider {...methods}>
        <form
          className='flex-1 bg-white p-[24px] pt-0'
          onSubmit={handleSubmit(handleAddReview)}
        >
          <ReviewForm type='new' isDisabled={isDisabled} />
          <ConfirmLeaveSheet sheetData={sheetData.leave_while_review} />
        </form>
        {isOpen && <Splash type='review' />}
      </FormProvider>
    </>
  );
}

export default NewReviewPage;
