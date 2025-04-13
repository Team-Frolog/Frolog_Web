import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getWellItems } from '../api/well.api';

/** 우물 아이템 쿼리 훅 */
export const useWellItems = (wellId?: string) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.wellItems, wellId],
    queryFn: ({ pageParam }) => getWellItems(pageParam, wellId!),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData ? fetchedData.pages.flatMap((page) => page.items) : [],
      pageParams: fetchedData.pageParams,
    }),
    staleTime: 0,
  });

  const isEmpty = isFetched && data?.pages.length === 0;

  return {
    wellItems: data ? data.pages : [],
    isEmpty,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isPending,
    isFetchingNextPage,
  };
};
