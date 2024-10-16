import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { getFrogList } from '../api/frog.api';

export const useFrogs = () => {
  const { data: session } = useSession();

  const { data } = useQuery({
    queryKey: ['frogs', session?.user.id],
    queryFn: () => getFrogList(session!.user.id),
    enabled: !!session,
  });

  return { frogs: data };
};
