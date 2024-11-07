import { useSuspenseQuery } from '@tanstack/react-query';
// import { getFrogList } from '../api/frog.api';
import { getStoreItems } from '@/features/Store/api/store.api';

export const useFrogs = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['frogs', userId],
    queryFn: () => getStoreItems({ owner: userId }),
  });

  return { frogs: data.items };
};
