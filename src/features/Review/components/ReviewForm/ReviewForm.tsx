'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { textareaType } from '@/data/ui/textareaType';
import RatingSelector from '@/components/Rating/RatingSelector';
import TagList from '@/components/Tag/TagList';
import Textarea from '@/components/Form/Input/Textarea';
import Button from '@/components/Button/Button';
import { ReviewFormType } from '../..';

interface Props {
  type: 'new' | 'edit';
  isDisabled?: boolean;
}

function ReviewForm({ type, isDisabled }: Props) {
  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<ReviewFormType>();

  return (
    <>
      <div className='flex-child-layout gap-[36px]'>
        <RatingSelector
          type='form'
          watch={watch}
          setValue={setValue}
          clearErrors={clearErrors}
          isError={!!errors.rating}
        />
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
    </>
  );
}

export default ReviewForm;
