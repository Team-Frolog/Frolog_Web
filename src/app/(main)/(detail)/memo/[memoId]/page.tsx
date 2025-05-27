import React, { Suspense } from 'react';
import { MemoDetailPage } from '@/features/Memo';
import { Metadata } from 'next';
import { getMemoDetail } from '@/features/Memo/api/memo.server.api';
import { getProfile } from '@/features/Profile/api/profile.server.api';
import { getBookInfo } from '@/features/Book/api/book.server.api';

interface Props {
  params: {
    memoId: string;
  };
  searchParams: {
    isFirstMemo?: string;
  };
}

async function MemoPage({
  params: { memoId },
  searchParams: { isFirstMemo },
}: Props) {
  const memoData = await getMemoDetail(memoId);
  const [profile, bookData] = await Promise.all([
    getProfile(memoData.writer),
    getBookInfo(memoData.isbn)
  ]);

  return (
    <Suspense fallback={<></>}>
      <MemoDetailPage
        profile={profile}
        memoData={memoData}
        bookData={bookData}
        isFirstMemo={isFirstMemo === 'true'}
      />
    </Suspense>
  );
}

export default MemoPage;

export const metadata: Metadata = {
  title: '메모',
  openGraph: {
    title: '메모',
  },
  twitter: {
    title: '메모',
  },
};
