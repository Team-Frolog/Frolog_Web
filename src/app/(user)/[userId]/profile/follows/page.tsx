'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import { FollowList } from '@/features/Profile';
import { useProfile } from '@/hooks/useProfile';
import React from 'react';

interface Props {
  params: {
    userId: string;
  };
}

function FollowsPage({ params: { userId } }: Props) {
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

export default FollowsPage;
