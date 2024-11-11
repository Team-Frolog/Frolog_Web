import React from 'react';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { SearchWell } from '@frolog/frolog-api';
import { DEFAULT_LIMIT } from '@/constants/api';

export const metadata: Metadata = {
  title: '우물 목록',
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

const WellList = dynamic(
  () => import('@/features/Well/components/WellList/WellList'),
  {
    ssr: false,
    loading: () => <WellListSkeleton />,
  }
);

interface Props {
  params: {
    userId: string;
  };
}

async function UserWellListPage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['wells', userId],
    queryFn: ({ pageParam }) =>
      new SearchWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ owner: userId, limit: DEFAULT_LIMIT, page: pageParam }),
    initialPageParam: 0,
    staleTime: 1000 * 30,
  });

  return (
    <>
      <MainLayout extraClass='bg-gray-300'>
        <SideWellHeader userId={userId} hasBackButton bgColor='bg-gray-300' />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <WellList userId={userId} isRootUser={false} />
        </HydrationBoundary>
      </MainLayout>
    </>
  );
}

export default UserWellListPage;
