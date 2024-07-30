'use client';

import React from 'react';
import { ReviewList } from '@/features/Review';
import AddButton from '@/components/Button/AddButton';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  return (
    <>
      <div className='add-button-wrapper'>
        <AddButton route='/new-review?id=9791193154250' text='리뷰 추가하기' />
      </div>
      <ReviewList bookId={id} />
    </>
  );
}

export default ReviewPage;
