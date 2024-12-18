import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_LIMIT } from '@/constants/api';
import { QUERY_KEY } from '@/constants/query';
import { getReviewList } from '../api/review.api';

export const useReviewForBook = (isbn: string) => {
  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.reviewList, isbn],
      queryFn: ({ pageParam }) =>
        getReviewList({ isbn, limit: DEFAULT_LIMIT, page: pageParam }),
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
      refetchOnWindowFocus: false,
    });

  const isEmpty = !data.pages.length;

  return {
    reviews: data.pages,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
  };
};
