import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowings } from '../api/profile.api';

export const useFollowings = (userId: string) => {
  const {
    data: followings,
    fetchNextPage,
    hasNextPage,
    isFetched,
  } = useInfiniteQuery({
    queryKey: ['followings', userId],
    queryFn: ({ pageParam }) => getFollowings(userId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.count / lastPage.limit) === lastPage.page + 1;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.followings)
        : [],
      pageParams: fetchedData.pageParams,
    }),
  });

  const isEmpty = !followings?.pages;

  return {
    followings: followings ? followings.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
  };
};
