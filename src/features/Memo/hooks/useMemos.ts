import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SearchMemoRes } from '@frolog/frolog-api';
import { deleteMemo, getMemos } from '../api/memo.api';

export const useMemos = (bookId: string) => {
  const queryClient = useQueryClient();

  const { data } = useQuery<SearchMemoRes | undefined>({
    queryKey: ['memos'],
    queryFn: () => getMemos({ isbn: bookId }),
    enabled: bookId !== undefined,
  });

  const { mutate: handleDeleteMemo } = useMutation({
    mutationFn: (id: string) => deleteMemo({ id }),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['memos'] });

      const previousMemos = queryClient.getQueryData([
        'memos',
      ]) as SearchMemoRes;

      queryClient.setQueryData(
        ['memos'],
        previousMemos.memos.filter((memo) => memo.id !== id)
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

  return { memoList: data?.memos, handleDeleteMemo };
};
