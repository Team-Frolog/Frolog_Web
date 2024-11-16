import { getProfile } from '@/api/auth.api';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (userId: string | undefined) => {
  const { data } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId!),
    enabled: userId !== undefined,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return { profile: data };
};
