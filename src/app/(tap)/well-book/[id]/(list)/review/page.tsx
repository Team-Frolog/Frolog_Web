'use client';

import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import { ReviewList } from '@/features/Review';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  useScroll();
  console.log(id);

  return (
    <div className='w-full flex-1 bg-white'>
      <ReviewList />
    </div>
  );
}

export default ReviewPage;
