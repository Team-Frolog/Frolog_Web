import { ErrorBoundary } from 'react-error-boundary';
import AddButton from '@/components/Button/AddButton';
import MemoListSkeleton from '@/components/Fallback/Skeleton/MemoListSkeleton';
import React from 'react';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import { Metadata } from 'next';
import { SearchMemo } from '@frolog/frolog-api';
import { DEFAULT_LIMIT } from '@/constants/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

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
};

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
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['memos', bookId, userId],
    queryFn: ({ pageParam }) =>
      new SearchMemo({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({
        isbn: bookId,
        writer: userId,
        limit: DEFAULT_LIMIT,
        page: pageParam,
      }),
    initialPageParam: 0,
    staleTime: 1000 * 30,
  });

  return (
    <>
      {userId === session?.user.id && (
        <div className='add-button-wrapper'>
          <AddButton
            route={`/${userId}/well/${wellId}/new-memo/${bookId}`}
            text='메모 추가하기'
          />
        </div>
      )}
      <ErrorBoundary fallback={<></>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MemoList bookId={bookId} userId={userId} />
        </HydrationBoundary>
      </ErrorBoundary>
    </>
  );
}

export default MemoPage;
