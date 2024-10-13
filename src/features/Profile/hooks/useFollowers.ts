import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowers } from '../api/follow.api';

export const useFollowers = (userId: string) => {
  const {
    data: followers,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['followers', userId],
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
  });

  const isEmpty = followers?.pages.length === 0;

  return {
    followers: followers ? followers.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isFetchingNextPage,
  };
};
