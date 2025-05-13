import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { GetMemoRes, SearchMemoRes } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import { deleteMemo, getMemos } from '../api/memo.api';

export interface MemoData {
  pages: {
    memos: GetMemoRes[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

/** 메모 리스트 쿼리 훅 */
export const useMemos = (userId: string, bookId?: string) => {
  const router = useRouter();
  const [memoId, setMemoId] = useState<string>('');

  const queryClient = useQueryClient();

  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.memoList, bookId, userId],
      queryFn: async ({ pageParam }) => getMemos(userId, pageParam, bookId),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const totalPages = Math.ceil(lastPage.count / lastPage.limit);
        const isLastPage = totalPages === lastPage.page + 1 || totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
      select: (fetchedData) => ({
        pages: fetchedData
          ? fetchedData.pages.flatMap((page) => page.memos)
          : [],
        pageParams: fetchedData.pageParams,
      }),
      staleTime: 1000 * 5,
    });

  const { mutate: handleDeleteMemo } = useMutation({
    mutationFn: () => deleteMemo({ id: memoId }),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY.memoList, bookId, userId],
      });

      const previousMemos = queryClient.getQueryData([
        QUERY_KEY.memoList,
        bookId,
        userId,
      ]) as SearchMemoRes;

      queryClient.setQueryData(
        [QUERY_KEY.memoList, bookId, userId],
        (oldData: MemoData) => ({
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            memos: page.memos.filter((item) => item.id !== memoId),
          })),
        })
      );

      return { previousMemos };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(
        [QUERY_KEY.memoList, bookId, userId],
        context?.previousMemos
      );
    },
    onSettled: () => {
      if (data.pages.length <= 1) {
        router.refresh();
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, bookId, userId] });
    },
  });

  const isEmpty = isFetched && data?.pages.length === 0;

  return {
    memoList: data?.pages,
    handleDeleteMemo,
    setMemoId,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetched,
  };
};
