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
        <div className='safe-header absolute left-[50%] z-70 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
          <CustomMotionLink
            id='setting-button'
            type='button'
            whileTap={{ scale: 0.9 }}
            href={getPath.profileSetting(userId)}
            className='absolute right-[28px] top-[28px] z-70'
          >
            <SettingIcon />
          </CustomMotionLink>
        </div>
      )}
    </WellEntryHeader>
  );
}

export default ProfilePageHeader;
