import { QUERY_KEY } from '@/constants/query';
import { MyMemoPage } from '@/features/Memo';
import { authOptions } from '@/utils/auth/nextAuth';
import { GetMemo } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

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

interface Props {
  params: {
    wellId: string;
    bookId: string;
    memoId: string;
  };
}

async function WellBookMemoPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.memoDetail, params.memoId],
    queryFn: () =>
      new GetMemo({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: params.memoId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyMemoPage params={params} />
    </HydrationBoundary>
  );
}

export default WellBookMemoPage;
