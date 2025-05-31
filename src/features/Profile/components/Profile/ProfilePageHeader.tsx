'use client';

import WellEntryHeader from '@/components/Header/WellEntryHeader';
import CustomMotionLink from '@/components/Link/CustomMotionLink';
import { getPath } from '@/utils/getPath';
import { SettingIcon } from 'public/icons';
import React from 'react';

interface Props {
  isRootUser: boolean;
  userId: string;
}

function ProfilePageHeader({ isRootUser, userId }: Props) {
  return (
    <WellEntryHeader title='프로필' hasBackButton={!isRootUser}>
      {isRootUser && (
        <CustomMotionLink
          id='setting-button'
          type='button'
          whileTap={{ scale: 0.9 }}
          href={getPath.profileSetting(userId)}
          className='absolute right-[28px] top-[35px] z-70'
        >
          <SettingIcon />
        </CustomMotionLink>
      )}
    </WellEntryHeader>
  );
}

export default ProfilePageHeader;
