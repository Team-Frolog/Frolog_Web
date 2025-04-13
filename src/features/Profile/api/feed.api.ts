import { ProfileFeedRes } from '@/app/api/mock/profileFeed/route';

export const getUserProfileFeed = async () => {
  const response = await fetch('/api/mock/profileFeed');
  const data: ProfileFeedRes[] = await response.json();

  return data;
};
