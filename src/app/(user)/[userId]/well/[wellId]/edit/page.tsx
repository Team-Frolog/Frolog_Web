import { QUERY_KEY } from '@/constants/query';
import { WellForm } from '@/features/Well';
import { GetWell } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

async function WellEditPage({ params: { wellId, userId } }: Props) {
  const session = await getServerSession();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.wellDetail, wellId],
    queryFn: () =>
      new GetWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: wellId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WellForm type='edit' wellId={wellId} userId={userId} />
    </HydrationBoundary>
  );
}

export default WellEditPage;

export const metadata: Metadata = {
  title: '우물 수정',
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
    title: '우물 수정',
  },
  twitter: {
    title: '우물 수정',
  },
};
