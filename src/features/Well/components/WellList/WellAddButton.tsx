'use client';

import CustomMotionLink from '@/components/Link/CustomMotionLink';
import { NavItemKey } from '@/constants/nav';
import { getPath } from '@/utils/getPath';
import { WellAddIcon } from 'public/icons';
import React from 'react';

interface Props {
  /** 유저 id */
  userId: string;
}

/** 우물 추가 버튼 컴포넌트 */
function WellAddButton({ userId }: Props) {
  return (
    <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
      <CustomMotionLink
        whileTap={{ scale: 0.95 }}
        navKey={NavItemKey.WELL}
        href={getPath.wellCreate(userId)}
        className='h-[161px] w-[161px]'
      >
        <WellAddIcon className='h-full w-full' />
      </CustomMotionLink>
      <span className='text-body-lg-bold'>새 우물 파기</span>
    </div>
  );
}

export default WellAddButton;
