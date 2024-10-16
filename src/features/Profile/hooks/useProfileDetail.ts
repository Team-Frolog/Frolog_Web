import { useSuspenseQuery } from '@tanstack/react-query';
import { getProfileDetail } from '../api/profile.api';

export const useProfileDetail = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['profileDetail', userId],
    queryFn: () => getProfileDetail(userId),
  });

  return { profileDetail: data };
};
