import React from 'react';
import { NewMemoPage } from '@/features/Memo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새로운 메모',
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
  };
}

function AddNewMemoPage({ params }: Props) {
  return <NewMemoPage params={params} />;
}

export default AddNewMemoPage;
