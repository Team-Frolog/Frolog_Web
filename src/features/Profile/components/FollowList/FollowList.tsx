'use client';

import React from 'react';
import Tap from '@/components/Tap/Tap';
import { useSearchParams } from 'next/navigation';
import Followers from './Followers';
import Followings from './Followings';
import { useProfileDetail } from '../../hooks/useProfileDetail';

interface Props {
  userId: string;
}

function FollowList({ userId }: Props) {
  const { profileDetail } = useProfileDetail(userId);
  const tap = useSearchParams().get('tap') || 'followers';

  if (!profileDetail) return <></>;

  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden py-[16px]'>
      <Tap
        taps={[
          {
            id: 1,
            label: 'followers',
            name: `팔로워 ${profileDetail.follower_cnt}`,
          },
          {
            id: 2,
            label: 'followings',
            name: `팔로잉 ${profileDetail.following_cnt}`,
          },
        ]}
        currentTap={tap}
      />
      {tap === 'followings' ? (
        <Followings userId={userId} />
      ) : (
        <Followers userId={userId} />
      )}
    </div>
  );
}

export default FollowList;
