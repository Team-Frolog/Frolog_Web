import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import { GetMemoRes, SearchMemoRes } from '@frolog/frolog-api';
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

export const useMemos = (bookId: string, userId: string) => {
  const [memoId, setMemoId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['memos', bookId, userId],
      queryFn: async ({ pageParam }) => getMemos(bookId, userId, pageParam),
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
      staleTime: 1000 * 10,
    });

  const { mutate: handleDeleteMemo } = useMutation({
    mutationFn: () => deleteMemo({ id: memoId }),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ['memos', bookId, userId],
      });

      const previousMemos = queryClient.getQueryData([
        'memos',
        bookId,
        userId,
      ]) as SearchMemoRes;

      queryClient.setQueryData(
        ['memos', bookId, userId],
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
        ['memos', bookId, userId],
        context?.previousMemos
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memos', bookId, userId] });
    },
  });

  const isEmpty = data?.pages.length === 0;

  return {
    memoList: data?.pages,
    handleDeleteMemo,
    setMemoId,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
  };
};
