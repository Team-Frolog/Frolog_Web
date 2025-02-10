'use client';

import React from 'react';
import ProfileHeader from '@/components/Header/ProfileHeader';
import Slider from '@/components/Slider/Slider';
import { UserWell } from '@/features/Well/types/well';
import WellIcon from '@/features/Well/components/WellList/WellIcon/WellIcon';

interface Props {
  userId: string;
  wells: UserWell[];
}

/** 우물 탐색/검색 아이템 컴포넌트 */
function WellSearchItem({ userId, wells }: Props) {
  return (
    <div className='flex w-full flex-col'>
      <ProfileHeader type='feed' hasFollow userId={userId} />{' '}
      <div className='pt-[30px]'>
        <div className='relative flex w-full rounded-[20px] bg-white py-[24px]'>
          <div className='tooltip-feed border-b-white' />
          <Slider slideClass='gap-[12px] px-[24px]'>
            {wells.map((well) => (
              <WellIcon key={well.id} wellData={well} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WellSearchItem;
