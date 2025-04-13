import { getUserProfileFeed } from '@/features/Profile/api/feed.api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useProfileFeed = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['profileFeed', userId],
    queryFn: getUserProfileFeed,
  });

  return { profileFeed: data };
};
