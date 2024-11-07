import { useQuery } from '@tanstack/react-query';
import { getUserPoints } from '../api/store.api';

export const useWallet = (userId?: string) => {
  const { data } = useQuery({
    queryKey: ['points', userId],
    queryFn: () => getUserPoints(userId!),
    enabled: userId !== undefined,
  });

  return { points: data?.points };
};