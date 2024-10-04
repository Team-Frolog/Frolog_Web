import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getFeed } from '../../api/feed.api';

export const useFeed = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetched, isLoading } =
    useSuspenseInfiniteQuery({
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
    });

  const isEmpty = !data?.pages.length;

  return {
    feedData: data ? data.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetched,
    isLoading,
    isEmpty,
  };
};
