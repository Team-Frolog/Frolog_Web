import React, { Suspense } from 'react';
import { NewReviewPage } from '@/features/Review';
import { Metadata } from 'next';
import { getBookInfo } from '@/features/Book/api/book.server.api';

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function AddNewReviewPage({ params }: Props) {
  const bookData = await getBookInfo(params.bookId);

  return (
    <Suspense fallback={<></>}>
      <NewReviewPage params={params} bookData={bookData} />
    </Suspense>
  );
}

export default AddNewReviewPage;

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
  openGraph: {
    title: '새로운 리뷰',
  },
  twitter: {
    title: '새로운 리뷰',
  },
};
