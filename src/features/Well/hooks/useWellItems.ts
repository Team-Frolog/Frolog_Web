import { useQuery } from '@tanstack/react-query';
import { getWellItems } from '../api/well.api';

export const useWellItems = (wellId: string) => {
  const { data } = useQuery({
    queryKey: ['wellItems', wellId],
    queryFn: () => getWellItems(wellId),
  });

  return { wellItems: data?.items, count: data?.length };
};
