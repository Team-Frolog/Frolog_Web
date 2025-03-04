import ProfileFeedSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileFeedSkeleton';
import React from 'react';

function ProfileFeedListSkeleton() {
  return (
    <>
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
      <ProfileFeedSkeleton />
    </>
  );
}

export default ProfileFeedListSkeleton;
