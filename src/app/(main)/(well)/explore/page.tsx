import WellListSkeleton from '@/components/Fallback/Skeleton/Well/WellListSkeleton';
import { DEFAULT_LIMIT } from '@/constants/api';
import { PAGES } from '@/constants/page';
import { QUERY_KEY } from '@/constants/query';
import { SearchInput } from '@/features/Search';
import { authOptions } from '@/utils/auth/nextAuth';
import { SearchUserWell } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import dynamic from 'next/dynamic';
import React from 'react';

const WellExploreList = dynamic(
  () => import('@/features/Well/components/WellSearch/WellExploreList'),
  {
    ssr: false,
    loading: () => <WellListSkeleton />,
  }
);

async function ExplorePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const queryClient = new QueryClient();
  const refTime = new Date().toISOString();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.explore, userId],
    queryFn: ({ pageParam }) =>
      new SearchUserWell({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({
        limit: DEFAULT_LIMIT,
        page: pageParam,
        ref_time: refTime,
      }),
    initialPageParam: 0,
    staleTime: 1000 * 10,
  });

  return (
    <div className='flex w-full flex-col'>
      <div className='flex px-[24px] pb-[20px]'>
        <SearchInput
          route={PAGES.WELL_SEARCH}
          placeholder='우물 키워드를 검색해보세요'
        />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <WellExploreList refTime={refTime} />
      </HydrationBoundary>
    </div>
  );
}

export default ExplorePage;
