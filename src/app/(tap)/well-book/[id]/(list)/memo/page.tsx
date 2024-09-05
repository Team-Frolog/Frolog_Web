import { ErrorBoundary } from 'react-error-boundary';
import AddButton from '@/components/Button/AddButton';
import MemoListSkeleton from '@/components/Fallback/Skeleton/MemoListSkeleton';
import React from 'react';
import dynamic from 'next/dynamic';

const MemoList = dynamic(
  () => import('@/features/Memo/components/MemoList/MemoList'),
  {
    ssr: false,
    loading: () => <MemoListSkeleton />,
  }
);

interface Props {
  params: {
    id: string;
  };
}

function MemoPage({ params: { id } }: Props) {
  return (
    <>
      <div className='add-button-wrapper'>
        <AddButton route={`/new-memo?id=${id}`} text='메모 추가하기' />
      </div>
      <ErrorBoundary fallback={<></>}>
        <MemoList bookId={id} />
      </ErrorBoundary>
    </>
  );
}

export default MemoPage;
