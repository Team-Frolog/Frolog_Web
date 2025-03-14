import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getFollowers } from '../api/follow.api';

/** 팔로워 리스트 쿼리 훅 */
export const useFollowers = (userId: string) => {
  const {
    data: followers,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.followers, userId],
    queryFn: ({ pageParam }) => getFollowers(userId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.followers)
        : [],
      pageParams: fetchedData.pageParams,
    }),
    staleTime: 0,
  });

  const isEmpty = isFetched && followers?.pages.length === 0;

  return {
    followers: followers ? followers.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isFetchingNextPage,
  };
};
