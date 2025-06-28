import { QUERY_KEY } from '@/constants/query';
import { getUserWellList } from '@/features/Well/api/well.api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SearchUserWellRes } from '@frolog/frolog-api';

export const useExploreWells = (
  refTime: string,
  wellList: SearchUserWellRes
) => {
  const {
    data: exploreResult,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.explore, refTime],
    queryFn: ({ pageParam }) =>
      getUserWellList({ page: pageParam, ref_time: refTime }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    initialData: {
      pages: [wellList],
      pageParams: [0],
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.userwells)
        : [],
      pageParams: fetchedData.pageParams,
    }),
  });

  return {
    exploreResult,
    isFetched,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  };
};
