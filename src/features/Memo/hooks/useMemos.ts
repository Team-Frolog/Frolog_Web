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
    comments: GetMemoRes[];
    count: number;
    limit: number;
    page: number;
  }[];
  pageParams: number[];
}

export const useMemos = (bookId: string) => {
  const [memoId, setMemoId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, hasNextPage, fetchNextPage, isFetched, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['memos', bookId],
      queryFn: async ({ pageParam }) => getMemos(bookId, pageParam),
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
      refetchOnWindowFocus: false,
    });

  const { mutate: handleDeleteMemo } = useMutation({
    mutationFn: () => deleteMemo({ id: memoId }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['memos', bookId] });

      const previousMemos = queryClient.getQueryData([
        'memos',
        bookId,
      ]) as SearchMemoRes;

      queryClient.setQueryData(['memos', bookId], (oldData: MemoData) => ({
        ...oldData,
        pages: oldData.pages.map((page) => ({
          ...page,
          memos: page.comments.filter((item) => item.id !== memoId),
        })),
      }));

      return { previousMemos };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(['memos', bookId], context?.previousMemos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memos', bookId] });
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
