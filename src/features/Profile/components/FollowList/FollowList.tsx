'use client';

import Tap from '@/components/Tap/Tap';
import React, { useState } from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import FollowItem from './FollowItem';

function FollowList() {
  const [followType, setFollowType] = useState(1);

  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden py-[16px]'>
      <Tap
        taps={[
          { id: 1, name: '팔로워' },
          { id: 2, name: '팔로잉' },
        ]}
        currentTap={followType}
        setCurrentTap={setFollowType}
      />
      {followType === 1 ? (
        <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
          <FollowItem />
          <FollowItem isFollowing />
          <FollowItem isFollowing />
        </div>
      ) : (
        <div className='flex flex-1 items-center justify-center'>
          <EmptyContentFrog title='팔로우하는 사람을 만들어보세요!' />
        </div>
      )}
    </div>
  );
}

export default FollowList;
