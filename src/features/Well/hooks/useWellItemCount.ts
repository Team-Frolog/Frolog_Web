import { useQuery } from '@tanstack/react-query';
import { getUserWellItemsCount } from '../api/well.api';
import { QUERY_KEY } from '@/constants/query';

export const useWellItemCount = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.wellItemCount, userId],
    queryFn: () => getUserWellItemsCount(userId),
    enabled: !!userId,
  });

  return {
    wellItemCount: data?.total,
    isLoading,
  };
};
