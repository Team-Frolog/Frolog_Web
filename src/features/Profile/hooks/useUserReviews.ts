import { DEFAULT_LIMIT } from '@/constants/api';
import { QUERY_KEY } from '@/constants/query';
import { getReviewList } from '@/features/Review/api/review.api';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

export const useUserReviews = (userId: string) => {
  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.reviewList, userId],
      queryFn: ({ pageParam }) =>
        getReviewList({
          writer: userId,
          page: pageParam,
          limit: DEFAULT_LIMIT,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.reviews)
          : [],
        pageParams: fetchedData.pageParams,
      }),
      staleTime: 1000 * 5,
    });

  const isEmpty = isFetched && data?.pages.length === 0;

  return {
    reviewList: data?.pages,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetched,
  };
};
