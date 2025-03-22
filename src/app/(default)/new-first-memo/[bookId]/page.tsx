import { Metadata } from 'next';
import React from 'react';
import NewFirstMemo from '@/features/Memo/components/FirstMemo/NewFirstMemoPage';

interface Props {
  params: {
    bookId: string;
  };
}

function NewFirstMemoPage({ params: { bookId } }: Props) {
  return <NewFirstMemo bookId={bookId} />;
}

export default NewFirstMemoPage;

export const metadata: Metadata = {
  title: '첫 메모',
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
    title: '첫 메모',
  },
  twitter: {
    title: '첫 메모',
  },
};
