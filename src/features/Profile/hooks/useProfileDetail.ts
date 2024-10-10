import { useQuery } from '@tanstack/react-query';
import { getProfileDetail } from '../api/profile.api';

export const useProfileDetail = (userId: string | undefined) => {
  const { data } = useQuery({
    queryKey: ['profileDetail', userId],
    queryFn: () => getProfileDetail(userId!),
    enabled: !!userId,
  });

  return { profileDetail: data };
};
