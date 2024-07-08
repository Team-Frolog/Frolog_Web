'use client';

import BookInfo from '@/components/common/book/BookInfo';
import RatingSelector from '@/components/common/rating/RatingSelector';
import TagList from '@/components/common/tag/TagList';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useScroll } from '@/hooks/gesture/useScroll';
import Textarea from '@/components/common/form/input/Textarea';
import { textareaType } from '@/data/textareaType';

interface ReviewForm {
  rating: number | null;
  oneLiner: string;
  review: string;
  pros: number[];
  cons: number[];
}

function NewReviewPage() {
  useScroll();
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

  return (
    <FormProvider {...methods}>
      <form className='flex h-fit w-full flex-1 flex-col items-center bg-white text-gray-800'>
        <BookInfo />
        <div className='flex w-full flex-col gap-[36px] p-[24px]'>
          <RatingSelector />
          <TagList type='pros' />
          <TagList type='cons' />
          <Textarea option={textareaType.oneLiner} />
          <Textarea option={textareaType.review} />
          <div>완료 버튼</div>
        </div>
      </form>
    </FormProvider>
  );
}

export default NewReviewPage;
