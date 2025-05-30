import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { SearchWellRes } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import { getWellList } from '../api/well.api';

/** 우물 리스트 쿼리 훅 */
export const useWells = (userId: string, initialWells?: SearchWellRes) => {
  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.wellList, userId],
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
      initialData: initialWells
        ? {
            pages: [initialWells],
            pageParams: [0],
          }
        : undefined,
      refetchOnWindowFocus: false,
      staleTime: 0,
    });

  const isEmpty = isFetched && data?.pages.length === 0;

  return {
    wells: data?.pages,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
  };
};
