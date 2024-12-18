import { QUERY_KEY } from '@/constants/query';
import { WellForm } from '@/features/Well';
import { authOptions } from '@/utils/auth/auth';
import { SearchStoreItem } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

export const metadata: Metadata = {
  title: '우물 생성',
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
    userId: string;
  };
}

async function WellCreatePage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.myFrogs, userId],
    queryFn: () =>
      new SearchStoreItem({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ owner: userId, type: 'frog' }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WellForm type='write' userId={userId} />
    </HydrationBoundary>
  );
}

export default WellCreatePage;
