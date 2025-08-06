import { useQuery } from '@tanstack/react-query';
import { getStoreItems } from '../api/store.api';
import { QUERY_KEY } from '@/constants/query';

export const useUserFrogsCount = () => {
  const baseFrogs = ['roro', 'fro', 'rogi'];

  const { data } = useQuery({
    queryKey: [QUERY_KEY.userFrogs],
    queryFn: () => getStoreItems({ type: 'frog', limit: 100 }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const baseFrogsCount = data?.items.filter(
    (item) => baseFrogs.includes(item.key) && item.is_owned
  ).length;

  return {
    baseFrogsCount,
  };
};
