import React from 'react';
import { WellDetailPage } from '@/features/Well';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetWell, SearchWellItem } from '@frolog/frolog-api';
import { WELLITEM_LIMIT } from '@/constants/api';

export const metadata: Metadata = {
  title: '우물',
};

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

async function UserWellDetailPage({ params: { userId, wellId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['well', wellId],
    queryFn: () =>
      new GetWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: wellId }),
    staleTime: 1000 * 10,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['wellItems', wellId],
    queryFn: ({ pageParam }) =>
      new SearchWellItem({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({
        page: pageParam,
        limit: WELLITEM_LIMIT,
        sort: 'oldest',
        well_id: wellId,
      }),
    initialPageParam: 0,
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WellDetailPage
        userId={userId}
        wellId={wellId}
        sessionUserId={session?.user.id}
        defaultWellId={session?.user.defaultWellId}
      />
    </HydrationBoundary>
  );
}

export default UserWellDetailPage;
