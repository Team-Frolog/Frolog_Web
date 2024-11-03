import React from 'react';
import { NewReviewPage } from '@/features/Review';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새로운 리뷰',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

function ADdNewReviewPage({ params }: Props) {
  return <NewReviewPage params={params} />;
}

export default ADdNewReviewPage;
