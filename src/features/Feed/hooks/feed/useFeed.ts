'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getFeed } from '../../api/feed.api';

export const useFeed = () => {
  const [isCommentLoading, setIsCommentLoading] = useState(false);

  const {
    data,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['feed'],
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
    isLoading,
    isEmpty,
    refetch,
    isCommentLoading,
    setIsCommentLoading,
  };
};
