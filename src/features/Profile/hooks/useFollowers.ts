import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowers } from '../api/follow.api';

export const useFollowers = (userId: string) => {
  const {
    data: followers,
    fetchNextPage,
    hasNextPage,
    isFetched,
  } = useInfiniteQuery({
    queryKey: ['followers', userId],
    queryFn: ({ pageParam }) => getFollowers(userId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.count / lastPage.limit) === lastPage.page + 1;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.followers)
        : [],
      pageParams: fetchedData.pageParams,
    }),
  });

  const isEmpty = !followers?.pages;

  return {
    followers: followers ? followers.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
  };
};
