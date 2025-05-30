'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import FollowListSkeleton from '@/components/Fallback/Skeleton/Profile/FollowListSkeleton';
import Tab from '@/components/Tab/Tab';
import { useTab } from '@/hooks/useTab';
import { useProfileDetail } from '../../hooks/useProfileDetail';

const Followers = dynamic(
  () => import('@/features/Profile/components/FollowList/Followers'),
  {
    loading: () => <FollowListSkeleton />,
  }
);

const Followings = dynamic(
  () => import('@/features/Profile/components/FollowList/Followings'),
  {
    loading: () => <FollowListSkeleton />,
  }
);

interface Props {
  userId: string;
}

/** 팔로워/팔로잉 리스트 탭 컴포넌트 */
function FollowList({ userId }: Props) {
  const { profileDetail } = useProfileDetail(userId);
  const { tab, changeTab } = useTab('followers');

  if (!profileDetail) return null;

  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden py-[16px]'>
      <Tab
        tabs={[
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
        currentTab={tab}
        defaultTab='followers'
        onChangeTab={changeTab}
      />
      {tab === 'followings' ? (
        <Followings userId={userId} />
      ) : (
        <Followers userId={userId} />
      )}
    </div>
  );
}

export default FollowList;
