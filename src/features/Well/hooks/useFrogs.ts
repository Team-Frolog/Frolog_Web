import { useSuspenseQuery } from '@tanstack/react-query';
import { getStoreItems } from '@/features/Store/api/store.api';
import { QUERY_KEY } from '@/constants/query';

/** 우물 개구리 리스트 쿼리 훅 */
export const useFrogs = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.myFrogs, userId],
    queryFn: () => getStoreItems({ owner: userId, type: 'frog' }),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { frogs: data.items };
};
