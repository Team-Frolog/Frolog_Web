import { getProfile } from '@/api/auth.api';
import { QUERY_KEY } from '@/constants/query';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (userId: string | undefined) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.profile, userId],
    queryFn: () => getProfile(userId!),
    enabled: userId !== undefined,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  return { profile: data };
};
