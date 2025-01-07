import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/query';
import { getWell } from '../api/well.api';

/** 우물 정보 쿼리 훅 */
export const useWell = (wellId: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.wellDetail, wellId],
    queryFn: () => getWell(wellId),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { well: data };
};
