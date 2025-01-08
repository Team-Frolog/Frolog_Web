'use client';

import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import { useProfile } from '@/hooks/useProfile';
import FollowList from './FollowList';

interface Props {
  userId: string;
}

/** 팔로워/팔로잉 페이지 */
function FollowPage({ userId }: Props) {
  const { profile } = useProfile(userId);

  if (!profile) return <></>;

  return (
    <>
      <TitleHeader
        type='default'
        theme='light'
        hasButton={false}
        title={profile?.username}
      />
      <FollowList userId={userId} />
    </>
  );
}

export default FollowPage;
