'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import UserStatistics from './UserStatistics';
import UserType from './UserType';
import { useProfileDetail } from '../../hooks/useProfileDetail';

interface Props {
  userId: string;
  isMe?: boolean;
}

function Profile({ userId, isMe = false }: Props) {
  const { profileDetail } = useProfileDetail(userId);

  if (!profileDetail) return <></>;

  return (
    <div className='flex w-full flex-col gap-[28px]'>
      <UserStatistics profileDetail={profileDetail} />
      <UserType profileDetail={profileDetail} />
      {isMe && (
        <div className='flex px-page'>
          <LinkButton route='/profile/edit' theme='gray'>
            프로필 편집
          </LinkButton>
        </div>
      )}
    </div>
  );
}

export default Profile;
