import React from 'react';
import { MemoDetail } from '@/features/Memo';
import { getMemoDetail } from '@/features/Memo/api/memo.api';
import { useQuery } from '@tanstack/react-query';

interface Props {
  params: {
    memoId: string;
  };
}

function MemoPage({ params: { memoId } }: Props) {
  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
  });

  return <MemoDetail memoData={memoDetail} />;
}

export default MemoPage;
