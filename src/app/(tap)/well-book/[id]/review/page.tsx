'use client';

import React from 'react';
import { useScroll } from '@/hooks/gesture/useScroll';
import ReviewForm from '@/components/common/form/ReviewForm';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  useScroll();

  return (
    <>
      <ReviewForm bookId={id} />
    </>
  );
}

export default ReviewPage;
