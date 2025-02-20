import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getFollowings } from '../api/follow.api';

/** 팔로잉 리스트 쿼리 훅 */
export const useFollowings = (userId: string) => {
  const {
    data: followings,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.followings, userId],
    queryFn: ({ pageParam }) => getFollowings(userId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.followings)
        : [],
      pageParams: fetchedData.pageParams,
    }),
    staleTime: 0,
  });

  const isEmpty = isFetched && followings?.pages.length === 0;

  return {
    followings: followings ? followings.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isFetchingNextPage,
  };
};
