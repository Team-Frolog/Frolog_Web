import ProfileFeedSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileFeedSkeleton';
import React from 'react';

function ProfileFeedListSkeleton() {
  return (
    <div className='relative flex flex-wrap gap-[20px] px-page'>
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
    </div>
  );
}

export default ProfileFeedListSkeleton;
