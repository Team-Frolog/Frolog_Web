import { ErrorBoundary } from 'react-error-boundary';
import AddButton from '@/components/Button/AddButton';
import MemoListSkeleton from '@/components/Fallback/Skeleton/Memo/MemoListSkeleton';
import React, { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import { Metadata } from 'next';
import { NAV_ITEM } from '@/constants/nav';
import { getPath } from '@/utils/getPath';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { MemoList } from '@/features/Memo';
import { getMemoList } from '@/features/Memo/api/memo.server.api';

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function MemoPage({ params: { wellId, userId, bookId } }: Props) {
  const session = await getServerSession(authOptions);
  const memoList = await getMemoList(bookId, userId);

  return (
    <>
      <WithConditionalRendering condition={userId === session?.user.id}>
        <div className='add-button-wrapper'>
          <AddButton
            route={`${getPath.newMemo(userId, wellId, bookId)}?nav=${NAV_ITEM.well.key}`}
            text='메모 추가하기'
          />
        </div>
      </WithConditionalRendering>

      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<MemoListSkeleton />}>
          <MemoList
            bookId={bookId}
            userId={userId}
            initialMemoList={memoList}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default MemoPage;

export const metadata: Metadata = {
  title: '메모 목록',
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
    title: '메모 목록',
  },
  twitter: {
    title: '메모 목록',
  },
};
