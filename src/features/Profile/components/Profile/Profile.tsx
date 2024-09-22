'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import UserStatistics from './UserStatistics';
import UserType from './UserType';
import IntroInput from './IntroInput';

function Profile() {
  return (
    <div className='flex w-full flex-col gap-[28px] px-page'>
      <UserStatistics />
      <UserType />
      <IntroInput />
      <LinkButton route='/profile/edit' theme='gray'>
        프로필 편집
      </LinkButton>
    </div>
  );
}

export default Profile;
