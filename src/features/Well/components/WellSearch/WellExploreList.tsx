'use client';

import WellitemSkeleton from '@/components/Fallback/Skeleton/WellitemSkeleton';
import { QUERY_KEY } from '@/constants/query';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

const fetchExplore = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/well/userwell/search?page=${page}`
  ).then((res) => res.json());

  return response;
};

function WellExploreList() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.explore],
      queryFn: ({ pageParam }) => fetchExplore(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.userwells)
          : [],
        pageParams: fetchedData.pageParams,
      }),
    });
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (!data) return null;

  return (
    <div className='flex w-full flex-col gap-[36px]'>
      {data.pages.map(({ id, wells }) => (
        <WellSearchItem key={id} userId={id} wells={wells} />
      ))}
      {isFetchingNextPage || isLoading ? (
        <WellitemSkeleton />
      ) : (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default WellExploreList;
