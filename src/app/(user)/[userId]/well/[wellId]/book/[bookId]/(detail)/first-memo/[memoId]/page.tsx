import { QUERY_KEY } from '@/constants/query';
import EditFirstMemoPage from '@/features/Memo/components/FirstMemo/EditFirstMemoPage';
import { authOptions } from '@/utils/auth/nextAuth';
import { GetMemo } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import React from 'react';

interface Props {
  params: {
    userId: string;
    bookId: string;
    memoId: string;
  };
}

async function MyFirstMemoPage({ params: { userId, bookId, memoId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.firstMemoDetail, memoId],
    queryFn: () =>
      new GetMemo({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: memoId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditFirstMemoPage userId={userId} bookId={bookId} memoId={memoId} />
    </HydrationBoundary>
  );
}

export default MyFirstMemoPage;
