'use client';

import ProfileFeedListSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileFeedListSkeleton';
import Tab from '@/components/Tab/Tab';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ProfileMemoList = dynamic(
  () => import('@/features/Profile/components/Feed/ProfileMemoList'),
  { ssr: false, loading: () => <ProfileFeedListSkeleton /> }
);

const ProfileReviewList = dynamic(
  () => import('@/features/Profile/components/Feed/ProfileReviewList'),
  { ssr: false, loading: () => <ProfileFeedListSkeleton /> }
);

interface Props {
  userId: string;
}

function ProfileFeed({ userId }: Props) {
  const tab = useSearchParams().get('currentTab') || 'memo';
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Tab
        tabs={[
          { id: 1, label: 'memo', name: '메모 모음' },
          { id: 2, label: 'review', name: '리뷰 모음' },
        ]}
        currentTab={tab}
        defaultTab='memo'
        onChangeTab={(label: string) =>
          router.replace(`${pathname}?currentTab=${label}`)
        }
      />
      {tab === 'memo' ? (
        <ProfileMemoList userId={userId} />
      ) : (
        <ProfileReviewList userId={userId} />
      )}
    </>
  );
}

export default ProfileFeed;
