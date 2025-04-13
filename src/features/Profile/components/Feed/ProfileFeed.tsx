'use client';

import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import { useProfileFeed } from '@/features/Profile/hooks/useProfileFeed';

interface Props {
  userId: string;
}

function ProfileFeed({ userId }: Props) {
  const { profileFeed } = useProfileFeed(userId);

  if (!profileFeed) return null;

  return (
    <div className='relative flex flex-wrap gap-[20px] px-page'>
      {profileFeed.map((item) => (
        <ProfileFeedItem key={item.bookId} feedData={item} />
      ))}
    </div>
  );
}

export default ProfileFeed;
