import React from 'react';
import { ReviewForm as ReviewFormType } from '@/types/form';
import { useFormContext } from 'react-hook-form';
import { useToastMessage } from '@/hooks/useToastMessage';
import { AnimatePresence } from 'framer-motion';
import { textareaType } from '@/data/textareaType';
import RatingSelector from '../rating/RatingSelector';
import TagList from '../tag/TagList';
import Textarea from '../form/input/Textarea';
import Button from '../button/Button';
import ConfirmLeaveSheet from '../popup/ConfirmLeaveSheet';
import ToastMessage from '../popup/ToastMessage';

interface Props {
  bookId: string;
  type: 'new' | 'edit';
  isDisabled?: boolean;
}

function ReviewForm({ bookId, type, isDisabled }: Props) {
  const { watch, setValue } = useFormContext<ReviewFormType>();
  const { isOpenToast } = useToastMessage();

  return (
    <>
      <div className='flex-child-layout gap-[36px]'>
        <RatingSelector type='form' watch={watch} setValue={setValue} />
        <TagList type='pros' />
        <TagList type='cons' />
        <Textarea option={textareaType.oneLiner} />
        <Textarea option={textareaType.review} />
        {type === 'new' && (
          <Button type='submit' disabled={isDisabled}>
            저장하기
          </Button>
        )}
        <ConfirmLeaveSheet bookId={bookId} />
      </div>
      <AnimatePresence>
        {isOpenToast && (
          <ToastMessage text='키워드는 최대 5개까지 고를 수 있어요!' />
        )}
      </AnimatePresence>
    </>
  );
}

export default ReviewForm;
