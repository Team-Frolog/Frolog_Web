'use client';

import React from 'react';
import ProfileHeader from '@/components/Header/ProfileHeader';
import Slider from '@/components/Slider/Slider';

/** 우물 탐색/검색 아이템 컴포넌트 */
function WellSearchItem() {
  return (
    <div className='flex w-full flex-col'>
      <ProfileHeader type='feed' hasFollow userId='zeaN4v7' />{' '}
      {/** 임시 userId */}
      <div className='pt-[30px]'>
        <div className='relative flex w-full rounded-[20px] bg-white py-[24px]'>
          <div className='tooltip-feed border-b-white' />
          <Slider slideClass='gap-[12px] px-[24px]'>
            {/** 실제 우물 목록 리스트로 바꿀 예정 */}
            <div className='flex-center relative box-content h-[120px] w-[120px] rounded-[50%] bg-black p-[20px]'>
              well
            </div>
            <div className='flex-center relative box-content h-[120px] w-[120px] rounded-[50%] bg-black p-[20px]'>
              well
            </div>
            <div className='flex-center relative box-content h-[120px] w-[120px] rounded-[50%] bg-black p-[20px]'>
              well
            </div>
            <div className='flex-center relative box-content h-[120px] w-[120px] rounded-[50%] bg-black p-[20px]'>
              well
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WellSearchItem;
