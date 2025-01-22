'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import FollowListSkeleton from '@/components/Fallback/Skeleton/FollowListSkeleton';
import Tap from '@/components/Tap/Tap';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useProfileDetail } from '../../hooks/useProfileDetail';

const Followers = dynamic(
  () => import('@/features/Profile/components/FollowList/Followers'),
  {
    ssr: false,
    loading: () => <FollowListSkeleton />,
  }
);

const Followings = dynamic(
  () => import('@/features/Profile/components/FollowList/Followings'),
  {
    ssr: false,
    loading: () => <FollowListSkeleton />,
  }
);

interface Props {
  userId: string;
}

/** 팔로워/팔로잉 리스트 탭 컴포넌트 */
function FollowList({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { profileDetail } = useProfileDetail(userId);
  const tap = useSearchParams().get('tap') || 'followers';

  if (!profileDetail) return null;

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
        defaultTap='followers'
        onChangeTap={(label: string) =>
          router.replace(`${pathname}?tap=${label}`)
        }
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
