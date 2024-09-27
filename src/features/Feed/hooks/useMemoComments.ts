import { useInfiniteQuery } from '@tanstack/react-query';
import { getMemoComments } from '../api/comments.api';

export const useMemoComments = (id: string) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['comments', id],
    queryFn: ({ pageParam }) => getMemoComments(id, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.count / lastPage.limit) === lastPage.page + 1;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => page.comments)
        : [],
      pageParams: fetchedData.pageParams,
    }),
    refetchOnWindowFocus: false,
  });

  const isEmpty = !data?.pages.length;

  return {
    comments: data ? data?.pages : [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isEmpty,
  };
};
