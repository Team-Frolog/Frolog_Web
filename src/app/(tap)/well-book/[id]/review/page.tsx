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

  return <>{id === '1' ? <ReviewForm bookId={id} /> : <ReviewList />}</>;
}

export default ReviewPage;
