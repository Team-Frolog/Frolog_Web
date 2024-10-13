import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getFeed } from '../../api/feed.api';

export const useFeed = () => {
  const {
    data,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ['feed'],
    queryFn: ({ pageParam }) => getFeed(pageParam),
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
  };
};
