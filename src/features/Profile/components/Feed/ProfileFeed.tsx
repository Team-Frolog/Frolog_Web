'use client';

import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import { useProfileFeed } from '@/features/Profile/hooks/useProfileFeed';

function ProfileFeed() {
  const { profileFeed } = useProfileFeed();
  console.log(profileFeed);

  if (!profileFeed) return null;

  return (
    <div className='relative flex flex-wrap gap-[20px] px-page'>
      {profileFeed.map((item) => (
        <ProfileFeedItem key={item.book.isbn} feedData={item} />
      ))}
    </div>
  );
}

export default ProfileFeed;
