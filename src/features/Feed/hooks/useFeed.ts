import { useInfiniteQuery } from '@tanstack/react-query';
import { getFeed } from '../api/feed.api';

export const useFeed = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ['feed'],
      queryFn: ({ pageParam }) => getFeed(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const isLastPage =
          Math.ceil(lastPage.count / lastPage.limit) === lastPage.page + 1;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.contents)
          : [],
        pageParams: fetchedData.pageParams,
      }),
      refetchOnWindowFocus: false,
    });

  const isEmpty = !data?.pages.length;

  return {
    feedData: data ? data.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isEmpty,
  };
};
