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
      <AddButton route='/new-review?id=9791193154250' text='리뷰 추가하기' />
      <ReviewList bookId={id} />
    </>
  );
}

export default ReviewPage;
