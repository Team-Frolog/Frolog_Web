'use client';

import React from 'react';
import Button from '@/components/Button/Button';
import UserStatistics from './UserStatistics';
import UserType from './UserType';
import IntroInput from './IntroInput';

function Profile() {
  return (
    <div className='flex w-full flex-col gap-[28px] px-page'>
      <UserStatistics />
      <UserType />
      <IntroInput />
      <Button type='button' theme='gray'>
        프로필 편집
      </Button>
    </div>
  );
}

export default Profile;
