import { useEffect, useRef } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { QUERY_KEY } from '@/constants/query';
import { searchBook } from '../api/search.api';

/** 검색 핸들링 훅 */
export const useSearch = () => {
  const queries = useSearchParams();
  const searchValue = queries.get('query');
  const queryClient = useQueryClient();
  const mainRef = useRef<HTMLElement>(null);

  /** 무한스크롤 리셋을 위한 쿼리 제거 */
  useEffect(() => {
    queryClient.removeQueries({
      queryKey: [QUERY_KEY.searchResult, [searchValue]],
    });
  }, [queryClient, searchValue]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.searchResult, [searchValue]],
    queryFn: async ({ pageParam }) => {
      if (searchValue === null) {
        return {
          books: [],
          count: 0,
          limit: 0,
          page: 0,
        };
      }
      const res = await searchBook({
        q: searchValue!,
        page: pageParam,
      });
      return res;
    },
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
    staleTime: 1000 * 5,
  });

  const isEmpty = !data?.pages.length;
  const isSearched = searchValue !== null;

  /** 재 검색 시 스크롤 상단으로 이동 */
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [searchValue]);

  return {
    searchResult: data ? data.pages : [],
    isEmpty,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isSearched,
    isLoading,
    isFetchingNextPage,
    mainRef,
  };
};
