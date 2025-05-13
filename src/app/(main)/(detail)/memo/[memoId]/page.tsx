import React, { Suspense } from 'react';
import { MemoDetailPage } from '@/features/Memo';
import { Metadata } from 'next';
import { getMemoDetail } from '@/features/Memo/api/memo.server.api';
import { getProfile } from '@/features/Profile/api/profile.server.api';

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
  const profile = await getProfile(memoData.writer);

  return (
    <Suspense fallback={<></>}>
      <MemoDetailPage profile={profile} memoData={memoData} isFirstMemo={isFirstMemo === 'true'} />
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
