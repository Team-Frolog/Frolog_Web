import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getMemoDetail } from '../api/memo.api';

export const useMemoDetailPage = (memoId: string) => {
  const { data: memoDetail } = useQuery({
    queryKey: [QUERY_KEY.memoDetail, memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { memoDetail };
};
