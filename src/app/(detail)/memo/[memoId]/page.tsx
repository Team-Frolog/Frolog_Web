import React from 'react';
import { MemoDetailPage } from '@/features/Memo';
import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetMemo } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';

interface Props {
  params: {
    memoId: string;
  };
}

export const metadata: Metadata = {
  title: '독서 메모',
};

async function MemoPage({ params: { memoId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['memo', memoId],
    queryFn: () =>
      new GetMemo({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: memoId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MemoDetailPage memoId={memoId} />
    </HydrationBoundary>
  );
}

export default MemoPage;
