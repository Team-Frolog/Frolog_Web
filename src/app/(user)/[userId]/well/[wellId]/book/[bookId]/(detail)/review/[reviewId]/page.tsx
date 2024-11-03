import React from 'react';
import { MyReviewPage } from '@/features/Review';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '리뷰',
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
    bookId: string;
    reviewId: string;
  };
}

function WellBookReviewPage({ params }: Props) {
  return <MyReviewPage params={params} />;
}

export default WellBookReviewPage;
