'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import UserStatistics from './UserStatistics';
import UserType from './UserType';
import { useProfileDetail } from '../../hooks/useProfileDetail';

interface Props {
  /** 해당 프로필 유저 id */
  userId: string;
  /** 현재 로그인한 유저인지 여부 */
  isRootUser?: boolean;
}

/** 프로필 컴포넌트 */
function Profile({ userId, isRootUser = false }: Props) {
  const { profileDetail } = useProfileDetail(userId);

  if (!profileDetail) return null;

  return (
    <div className='flex w-full flex-col gap-[28px]'>
      <UserStatistics profileDetail={profileDetail} />
      <UserType profileDetail={profileDetail} />
      {isRootUser && (
        <div className='flex px-page'>
          <LinkButton route={`/${userId}/profile/edit`} theme='gray'>
            프로필 편집
          </LinkButton>
        </div>
      )}
    </div>
  );
}

export default Profile;
