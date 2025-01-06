import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getUserPoints } from '../api/store.api';

/** 사용자 포인트 쿼리 훅 */
export const useWallet = (userId?: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.points, userId],
    queryFn: () => getUserPoints(userId!),
    enabled: userId !== undefined,
    staleTime: 0,
  });

  return { points: data?.points };
};
