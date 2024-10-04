import Slider from '@/components/Slider/Slider';
import React from 'react';

function UserType() {
  return (
    <Slider
      isBetween
      sliderClass='flex w-full overflow-hidden'
      slideClass='gap-[8px]'
    >
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='user-type-chip'>감정형</div>
        <span className='text-body-sm text-gray-600'>독서성향</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='user-type-chip-disabled'>비공개</div>
        <span className='text-body-sm text-gray-600'>연령대</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='user-type-chip'>남자</div>
        <span className='text-body-sm text-gray-600'>성별</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='user-type-chip'>디자인/크리에이티브</div>
        <span className='text-body-sm text-gray-600'>직업</span>
      </div>
    </Slider>
  );
}

export default UserType;
