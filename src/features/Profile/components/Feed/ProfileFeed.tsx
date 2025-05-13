'use client';

import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import React from 'react';

function ProfileFeed() {
  return (
    <div className='relative flex flex-wrap gap-[20px] px-page'>
      <ProfileFeedItem />
      <ProfileFeedItem />
      <ProfileFeedItem />
      <ProfileFeedItem />
    </div>
  );
}

export default ProfileFeed;
