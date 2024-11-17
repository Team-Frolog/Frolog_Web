import { useQuery } from '@tanstack/react-query';
import { getMemoDetail } from '../api/memo.api';

export const useMemoDetailPage = (memoId: string) => {
  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { memoDetail };
};
