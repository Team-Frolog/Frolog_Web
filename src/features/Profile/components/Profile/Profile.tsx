'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import UserStatistics from './UserStatistics';
import UserType from './UserType';
import IntroInput from './IntroInput';

interface Props {
  userId?: string;
}

function Profile({ userId }: Props) {
  return (
    <div className='flex w-full flex-col gap-[28px]'>
      <UserStatistics />
      <UserType />
      {userId ? (
        <div className='flex w-full flex-col gap-[8px] px-page'>
          <h6 className='mb-[4px] text-body-md text-gray-700'>자기소개</h6>
          <div className='input-common input-light w-full'>자기소개</div>
        </div>
      ) : (
        <IntroInput />
      )}
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
