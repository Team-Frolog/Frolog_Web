import { getProfile } from '@/api/auth.api';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (userId: string) => {
  const { data } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
  });

  return { profile: data };
};
