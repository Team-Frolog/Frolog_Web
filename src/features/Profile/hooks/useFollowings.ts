import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowings } from '../api/follow.api';

export const useFollowings = (userId: string) => {
  const {
    data: followings,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['followings', userId],
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
  });

  const isEmpty = followings?.pages.length === 0;

  return {
    followings: followings ? followings.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isFetchingNextPage,
  };
};
