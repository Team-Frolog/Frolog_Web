import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { searchBook } from '../api/search.api';

export const useSearch = () => {
  const queries = useSearchParams();
  const searchValue = queries.get('query');
  const category = queries.get('category');

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['search', [searchValue, category]],
    queryFn: ({ pageParam = 0 }) =>
      searchBook({
        q: searchValue!,
        page: pageParam,
        category: category || undefined,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isLastPage =
        Math.ceil(lastPage.count / lastPage.limit) === lastPage.page;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    enabled: searchValue !== null,
  });

  const searchResult = data ? data.pages.flatMap((page) => page.books) : [];
  const isEmpty = searchResult.length === 0;
  const isSearched = searchValue !== null;

  return {
    searchResult,
    isEmpty,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSearched,
  };
};
