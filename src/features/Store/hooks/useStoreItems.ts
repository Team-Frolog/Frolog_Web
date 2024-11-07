import { useQuery } from '@tanstack/react-query';
import { getStoreItems } from '../api/store.api';

export const useStoreItems = () => {
  const { data } = useQuery({
    queryKey: ['storeItems'],
    queryFn: () => getStoreItems({ type: 'frog' }),
  });

  return { storeItems: data?.items };
};
