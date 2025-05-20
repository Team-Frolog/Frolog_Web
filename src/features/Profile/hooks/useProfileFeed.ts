import { useParams } from 'next/navigation';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getProfileFeed } from '../api/feed.api';

export const useProfileFeed = () => {
  const { userId } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: ['profileFeed', userId],
    queryFn: () => getProfileFeed(userId as string),
  });

  return { profileFeed: data };
};
