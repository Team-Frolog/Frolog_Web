import { baseOptions } from '@/api/options';
import { QUERY_KEY } from '@/constants/query';
import { GetProfile } from '@frolog/frolog-api';
import { useQuery } from '@tanstack/react-query';

/** 프로필 개요 쿼리 훅 */
export const useProfile = (userId: string | undefined) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.profile, userId],
    queryFn: () => new GetProfile(baseOptions).fetch({ id: userId! }),
    enabled: userId !== undefined,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  return { profile: data };
};
