import { MyMemoPage } from '@/features/Memo';
import { getMemoDetail } from '@/features/Memo/api/memo.server.api';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

interface Props {
  params: {
    wellId: string;
    bookId: string;
    memoId: string;
  };
}

async function WellBookMemoPage({ params }: Props) {
  const memoData = await getMemoDetail(params.memoId);

  return (
    <Suspense fallback={<></>}>
      <MyMemoPage params={params} memoData={memoData} />
    </Suspense>
  );
}

export default WellBookMemoPage;

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
  openGraph: {
    title: '메모',
  },
  twitter: {
    title: '메모',
  },
};
