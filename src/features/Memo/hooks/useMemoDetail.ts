import { useQuery } from '@tanstack/react-query';
import { getMemoDetail } from '../api/memo.api';

export const useMemoDetail = (memoId: string) => {
  const { data } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
  });

  return { memoDetail: data };
};
