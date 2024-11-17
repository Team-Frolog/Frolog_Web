import { useSuspenseQuery } from '@tanstack/react-query';
import { getStoreItems } from '@/features/Store/api/store.api';

export const useFrogs = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['frogs', userId],
    queryFn: () => getStoreItems({ owner: userId, type: 'frog' }),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { frogs: data.items };
};
