import React from 'react';
import { MemoDetailPage } from '@/features/Memo';
import { Metadata } from 'next';

interface Props {
  params: {
    memoId: string;
  };
}

export const metadata: Metadata = {
  title: '독서 메모',
};

function MemoPage({ params: { memoId } }: Props) {
  return <MemoDetailPage memoId={memoId} />;
}

export default MemoPage;
