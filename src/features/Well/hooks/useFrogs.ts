import { useSuspenseQuery } from '@tanstack/react-query';
import { getFrogList } from '../api/frog.api';

export const useFrogs = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['frogs', userId],
    queryFn: () => getFrogList(userId),
  });

  return { frogs: data };
};
