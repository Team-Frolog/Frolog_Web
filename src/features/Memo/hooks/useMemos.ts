import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SearchMemoRes } from '@frolog/frolog-api';
import { deleteMemo, getMemos } from '../api/memo.api';

export const useMemos = (bookId: string) => {
  const [memoId, setMemoId] = useState<string>('');
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const { data } = useQuery<SearchMemoRes | undefined>({
    queryKey: ['memos'],
    queryFn: () => getMemos({ isbn: bookId, writer: session!.user.id }),
    enabled: bookId !== undefined && session !== null,
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
    onError: (err, variable, context) => {
      queryClient.setQueryData(['memos'], context?.previousMemos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['memos'] });
    },
  });

  return { memoList: data?.memos, handleDeleteMemo, setMemoId };
};
