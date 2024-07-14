'use client';

import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import ReviewForm from '@/components/common/review/ReviewForm';
import ReviewList from '@/components/common/review/ReviewList';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  useScroll();

  return (
    <div className='w-full flex-1 bg-white'>
      {id === '1' ? (
        <div className='p-[24px] pt-0'>
          <ReviewForm bookId={id} />
        </div>
      ) : (
        <ReviewList />
      )}
    </div>
  );
}

export default ReviewPage;
