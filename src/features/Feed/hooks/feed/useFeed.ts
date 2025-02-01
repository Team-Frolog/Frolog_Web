'use client';

import { useState } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getFeed } from '../../api/feed.api';

/** 피드 쿼리 훅 */
export const useFeed = () => {
  const [isCommentLoading, setIsCommentLoading] = useState(false);

  const {
    data,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEY.feed],
    queryFn: ({ pageParam }) => getFeed({ page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.contents)
        : [],
      pageParams: fetchedData.pageParams,
    }),
    refetchOnMount: true,
    staleTime: Infinity,
  });

  const isEmpty = !data?.pages.length;

  return {
    feedData: data ? data.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
    isEmpty,
    refetch,
    isCommentLoading,
    setIsCommentLoading,
  };
};
