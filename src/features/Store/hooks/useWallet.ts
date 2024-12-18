import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getUserPoints } from '../api/store.api';

export const useWallet = (userId?: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.points, userId],
    queryFn: () => getUserPoints(userId!),
    enabled: userId !== undefined,
    staleTime: 0,
  });

  return { points: data?.points };
};
