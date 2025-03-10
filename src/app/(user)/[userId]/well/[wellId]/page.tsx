import React from 'react';
import { WellDetailPage } from '@/features/Well';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetProfile, GetWell, SearchWellItem } from '@frolog/frolog-api';
import { WELLITEM_LIMIT } from '@/constants/api';
import { QUERY_KEY } from '@/constants/query';

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
    queryKey: [QUERY_KEY.wellDetail, wellId],
    queryFn: () =>
      new GetWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: wellId }),
    staleTime: 1000 * 10,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.wellItems, wellId],
    queryFn: async ({ pageParam }) =>
      new SearchWellItem({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({
        page: pageParam,
        limit: WELLITEM_LIMIT,
        sort: 'newest',
        well_id: wellId,
      }),
    initialPageParam: 0,
    staleTime: 1000 * 5,
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

export const generateMetadata = async ({
  params: { wellId, userId },
}: Props): Promise<Metadata> => {
  const session = await getServerSession(authOptions);

  const wellData = await new GetWell({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: wellId });

  const userInfo = await new GetProfile({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: userId });

  return {
    title: wellData.name,
    description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
    openGraph: {
      title: wellData.name,
      description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
      url: `https://www.frolog.kr/${userId}/well/${wellId}`,
    },
    twitter: {
      title: wellData.name,
      description: `${wellData.item_cnt}권의 책이 쌓인 ${userInfo.username}님의 우물`,
    },
  };
};
