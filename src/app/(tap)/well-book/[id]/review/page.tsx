'use client';

import BookInfo from '@/components/common/book/BookInfo';
import RatingSelector from '@/components/common/rating/RatingSelector';
import TagList from '@/components/common/tag/TagList';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useScroll } from '@/hooks/gesture/useScroll';
import Textarea from '@/components/common/form/input/Textarea';
import { textareaType } from '@/data/textareaType';
import Button from '@/components/common/button/Button';
import { useToastMessage } from '@/hooks/useToastMessage';
import { AnimatePresence } from 'framer-motion';
import ToastMessage from '@/components/common/popup/ToastMessage';
import ConfirmLeaveSheet from '@/components/common/popup/ConfirmLeaveSheet';
import Splash from '@/components/common/splash/Splash';
import useSplashStore from '@/store/splashStore';
import { NEW_REVIEW_ID } from '@/constants/storage';

interface ReviewForm {
  rating: number | null;
  oneLiner: string;
  review: string;
  pros: number[];
  cons: number[];
}

function ReviewPage() {
  useScroll();
  const {
    isOpen,
    actions: { changeState },
  } = useSplashStore();
  const { isOpenToast } = useToastMessage();
  const methods = useForm<ReviewForm>({
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
    sessionStorage.setItem(NEW_REVIEW_ID, 'id');
    changeState(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleAddReview)}
        className='flex h-fit w-full flex-1 flex-col items-center bg-white text-gray-800'
      >
        <BookInfo />
        <div className='flex w-full flex-col gap-[36px] p-[24px]'>
          <RatingSelector />
          <TagList type='pros' />
          <TagList type='cons' />
          <Textarea option={textareaType.oneLiner} />
          <Textarea option={textareaType.review} />
          <Button type='submit' disabled={isDisabled}>
            저장하기
          </Button>
          <ConfirmLeaveSheet />
        </div>
        <AnimatePresence>
          {isOpenToast && (
            <ToastMessage text='키워드는 최대 5개까지 고를 수 있어요!' />
          )}
        </AnimatePresence>
        {isOpen && <Splash type='review' />}
      </form>
    </FormProvider>
  );
}

export default ReviewPage;
