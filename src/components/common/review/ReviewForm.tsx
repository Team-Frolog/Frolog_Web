import { useToastMessage } from '@/hooks/useToastMessage';
import useSplashStore from '@/store/splashStore';
import { useStackMotionActions } from '@/store/stackMotionStore';
import React from 'react';
import { ReviewForm as ReviewFormType } from '@/types/form';
import { FormProvider, useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { textareaType } from '@/data/textareaType';
import RatingSelector from '../rating/RatingSelector';
import TagList from '../tag/TagList';
import Textarea from '../form/input/Textarea';
import Button from '../button/Button';
import ConfirmLeaveSheet from '../popup/ConfirmLeaveSheet';
import ToastMessage from '../popup/ToastMessage';
import Splash from '../splash/Splash';

interface Props {
  bookId: string;
}

function ReviewForm({ bookId }: Props) {
  const {
    isOpen,
    actions: { changeState },
  } = useSplashStore();
  const { setNewReviewId } = useStackMotionActions();
  const { isOpenToast } = useToastMessage();
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
    setValue,
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
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleAddReview)}
        className='flex-child-layout gap-[36px]'
      >
        <RatingSelector type='select' watch={watch} setValue={setValue} />
        <TagList type='pros' />
        <TagList type='cons' />
        <Textarea option={textareaType.oneLiner} />
        <Textarea option={textareaType.review} />
        <Button type='submit' disabled={isDisabled}>
          저장하기
        </Button>
        <ConfirmLeaveSheet bookId={bookId} />
      </form>
      <AnimatePresence>
        {isOpenToast && (
          <ToastMessage text='키워드는 최대 5개까지 고를 수 있어요!' />
        )}
      </AnimatePresence>
      {isOpen && <Splash type='review' />}
    </FormProvider>
  );
}

export default ReviewForm;
