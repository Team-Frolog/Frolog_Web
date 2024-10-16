import { useEffect } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { searchBook } from '../api/search.api';

export const useSearch = () => {
  const queries = useSearchParams();
  const searchValue = queries.get('query');
  const category = queries.get('category');
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ['search', [searchValue, category]],
    });
  }, [queryClient, searchValue, category]);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['search', [searchValue, category]],
    queryFn: ({ pageParam }) =>
      searchBook({
        q: searchValue!,
        page: pageParam,
        category: category || undefined,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData ? fetchedData.pages.flatMap((page) => page.books) : [],
      pageParams: fetchedData.pageParams,
    }),
    enabled: searchValue !== null,
  });

  const isEmpty = !data?.pages.length;
  const isSearched = searchValue !== null;

  return {
    searchResult: data ? data.pages : [],
    isEmpty,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSearched,
  };
};
