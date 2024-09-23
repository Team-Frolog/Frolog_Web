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
        <div className='w-fit whitespace-nowrap rounded-[12px] bg-gray-200 px-[22px] py-[8px] text-body-lg-bold text-gray-800'>
          감정형
        </div>
        <span className='text-body-sm text-gray-600'>독서성향</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='w-fit whitespace-nowrap rounded-[12px] bg-gray-200 px-[22px] py-[8px] text-body-lg-bold text-gray-800'>
          20대
        </div>
        <span className='text-body-sm text-gray-600'>연령대</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='w-fit whitespace-nowrap rounded-[12px] bg-gray-200 px-[22px] py-[8px] text-body-lg-bold text-gray-800'>
          남자
        </div>
        <span className='text-body-sm text-gray-600'>성별</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='w-fit whitespace-nowrap rounded-[12px] bg-gray-200 px-[22px] py-[8px] text-body-lg-bold text-gray-800'>
          디자인/크리에이티브
        </div>
        <span className='text-body-sm text-gray-600'>직업</span>
      </div>
    </Slider>
  );
}

export default UserType;
