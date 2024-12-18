import { useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getProfileDetail } from '../api/profile.api';

export const useProfileDetail = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.profileDetail, userId],
    queryFn: () => getProfileDetail(userId),
    staleTime: 1000 * 5,
  });

  return { profileDetail: data };
};
