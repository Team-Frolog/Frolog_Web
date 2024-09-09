import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { textareaType } from '@/data/ui/textareaType';
import RatingSelector from '@/components/Rating/RatingSelector';
import TagList from '@/components/Tag/TagList';
import Textarea from '@/components/Form/Input/Textarea';
import Button from '@/components/Button/Button';
import ToastMessage from '@/components/PopUp/ToastMessage';
import { useToastMessage } from '../../hooks/useToastMessage';
import { ReviewFormType } from '../..';

interface Props {
  type: 'new' | 'edit';
  isDisabled?: boolean;
}

function ReviewForm({ type, isDisabled }: Props) {
  const { watch, setValue } = useFormContext<ReviewFormType>();
  const { isOpenToast } = useToastMessage();

  return (
    <>
      <div className='flex-child-layout gap-[36px]'>
        <RatingSelector type='form' watch={watch} setValue={setValue} />
        <div className='flex flex-col gap-[36px] px-page'>
          <TagList type='pros' />
          <TagList type='cons' />
        </div>
        <Textarea type='bold' option={textareaType.oneLiner} />
        <Textarea option={textareaType.review} />
        {type === 'new' && (
          <div className='w-full p-page'>
            <Button type='submit' disabled={isDisabled}>
              저장하기
            </Button>
          </div>
        )}
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
