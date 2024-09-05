import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { SearchMemoRes } from '@frolog/frolog-api';
import { deleteMemo, getMemos } from '../api/memo.api';

export const useMemos = (bookId: string) => {
  const [memoId, setMemoId] = useState<string>('');
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ['memos'],
    queryFn: async () => getMemos(bookId),
  });

  const { mutate: handleDeleteMemo } = useMutation({
    mutationFn: () => deleteMemo({ id: memoId }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['memos'] });

      const previousMemos = queryClient.getQueryData([
        'memos',
      ]) as SearchMemoRes;

      queryClient.setQueryData(
        ['memos'],
        previousMemos.memos.filter((memo) => memo.id !== memoId)
      );

      return { previousMemos };
    },
    onError: (_err, _variable, context) => {
      queryClient.setQueryData(['memos'], context?.previousMemos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memos'] });
    },
  });

  return {
    memoList: data?.memos,
    handleDeleteMemo,
    setMemoId,
  };
};
