import { MyMemoPage } from '@/features/Memo';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '메모',
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
    bookId: string;
    memoId: string;
  };
}

function WellBookMemoPage({ params }: Props) {
  return <MyMemoPage params={params} />;
}

export default WellBookMemoPage;
