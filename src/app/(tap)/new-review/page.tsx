'use client';

import BookInfo from '@/components/common/book/BookInfo';
import RatingSelector from '@/components/common/rating/RatingSelector';
import TagList from '@/components/common/tag/TagList';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ReviewForm {
  rating: number | null;
  oneLiner: string;
  review: string;
  pros: number[];
  cons: number[];
}

function NewReviewPage() {
  const methods = useForm<ReviewForm>({
    mode: 'onChange',
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
          <div>한줄평</div>
          <div>리뷰</div>
          <div>완료 버튼</div>
        </div>
      </form>
    </FormProvider>
  );
}

export default NewReviewPage;
