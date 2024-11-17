import { useQuery } from '@tanstack/react-query';
import { getWell } from '../api/well.api';

export const useWell = (wellId: string) => {
  const { data } = useQuery({
    queryKey: ['well', wellId],
    queryFn: () => getWell(wellId),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { well: data };
};
