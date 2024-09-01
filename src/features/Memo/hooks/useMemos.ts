import { useQuery } from '@tanstack/react-query';
import { SearchMemoRes } from '@frolog/frolog-api';
import { getMemos } from '../api/memo.api';

export const useMemos = (bookId: string) => {
  const { data } = useQuery<SearchMemoRes>({
    queryKey: ['memos'],
    queryFn: () => getMemos({ isbn: bookId }),
    enabled: bookId !== undefined,
  });

  return { memoList: data?.memos };
};
