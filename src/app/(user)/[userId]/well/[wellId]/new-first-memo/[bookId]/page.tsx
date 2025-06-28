import { Metadata } from 'next';
import React from 'react';
import NewFirstMemo from '@/features/Memo/components/FirstMemo/NewFirstMemoPage';

interface Props {
  params: {
    userId: string;
    wellId: string;
    bookId: string;
  };
}

function NewFirstMemoPage({ params: { bookId, userId, wellId } }: Props) {
  return <NewFirstMemo userId={userId} wellId={wellId} bookId={bookId} />;
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
