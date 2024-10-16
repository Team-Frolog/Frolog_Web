import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getWellList } from '../api/well.api';

export const useWells = (userId: string) => {
  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['wells'],
      queryFn: ({ pageParam }) => getWellList(userId, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.wells)
          : [],
        pageParams: fetchedData.pageParams,
      }),
    });

  const isEmpty = data ? data.pages.length === 0 : 0;

  return {
    wells: data?.pages,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
  };
};
