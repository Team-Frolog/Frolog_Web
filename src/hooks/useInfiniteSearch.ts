import { QUERY_KEY } from '@/constants/query';
import { GetWellRes, SearchBookRes } from '@frolog/frolog-api';
import { useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useRef, useEffect } from 'react';

interface SearchWellRes {
  count: number;
  limit: number;
  page: number;
  wells: GetWellRes[];
}

interface Props<TRes, TItem> {
  queryKey: string;
  queryFn: ({ q, page }: { q: string; page: number }) => Promise<TRes>;
  returnData: (page: TRes) => TItem[];
}

export const useInfiniteSearch = <
  TRes extends SearchBookRes | SearchWellRes,
  TItem,
>({
  queryKey,
  queryFn,
  returnData,
}: Props<TRes, TItem>) => {
  const queries = useSearchParams();
  const searchValue = queries.get('query');
  const queryClient = useQueryClient();
  const mainRef = useRef<HTMLElement>(null);

  /** 무한스크롤 리셋을 위한 쿼리 제거 */
  useEffect(() => {
    queryClient.removeQueries({
      queryKey: [queryKey, [searchValue]],
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
          count: 0,
          limit: 0,
          page: 0,
        } as TRes;
      }
      const res = await queryFn({ q: searchValue, page: pageParam });
      return res;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.count / lastPage.limit);
      const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
      return isLastPage ? undefined : lastPage.page + 1;
    },
    select: (fetchedData) => ({
      pages: fetchedData
        ? fetchedData.pages.flatMap((page) => returnData(page))
        : [],
      pageParams: fetchedData.pageParams,
    }),
    enabled: searchValue !== null,
    staleTime: 1000 * 5,
  });

  const isEmpty = isFetched && data?.pages.length === 0;
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
