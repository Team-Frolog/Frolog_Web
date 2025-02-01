import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';
import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { SearchWell } from '@frolog/frolog-api';
import { DEFAULT_LIMIT } from '@/constants/api';
import { QUERY_KEY } from '@/constants/query';

const WellList = dynamic(
  () => import('@/features/Well/components/WellList/WellList'),
  {
    ssr: false,
    loading: () => <WellListSkeleton />,
  }
);

export const metadata: Metadata = {
  title: '나의 우물',
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

async function WellPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.wellList, userId],
    queryFn: ({ pageParam }) =>
      new SearchWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ owner: userId, limit: DEFAULT_LIMIT, page: pageParam }),
    initialPageParam: 0,
    staleTime: 1000 * 10,
  });

  return (
    <MainLayout extraClass='bg-gray-300'>
      <SideWellHeader userId={userId} hasStoreButton bgColor='bg-gray-300' />
      <HydrationBoundary state={dehydrate(queryClient)}>
        {userId && <WellList userId={userId} isRootUser />}
      </HydrationBoundary>
    </MainLayout>
  );
}

export default WellPage;
