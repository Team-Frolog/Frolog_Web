'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import UserStatistics from './UserStatistics';
import UserType from './UserType';

interface Props {
  userId?: string;
}

function Profile({ userId }: Props) {
  return (
    <div className='flex w-full flex-col gap-[28px]'>
      <UserStatistics />
      <UserType />
      {!userId && (
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
