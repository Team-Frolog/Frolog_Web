import { ErrorBoundary } from 'react-error-boundary';
import AddButton from '@/components/Button/AddButton';
import MemoListSkeleton from '@/components/Fallback/Skeleton/MemoListSkeleton';
import React from 'react';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';

const MemoList = dynamic(
  () => import('@/features/Memo/components/MemoList/MemoList'),
  {
    ssr: false,
    loading: () => <MemoListSkeleton />,
  }
);

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function MemoPage({ params: { wellId, userId, bookId } }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {userId === session?.user.id && (
        <div className='add-button-wrapper'>
          <AddButton
            route={`${userId}/well/${wellId}/new-memo/${bookId}`}
            text='메모 추가하기'
          />
        </div>
      )}
      <ErrorBoundary fallback={<></>}>
        <MemoList bookId={bookId} userId={userId} />
      </ErrorBoundary>
    </>
  );
}

export default MemoPage;
