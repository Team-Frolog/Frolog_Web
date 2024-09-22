import React from 'react';

function UserType() {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-body-lg-bold text-gray-800'>
          감정형
        </div>
        <span className='text-body-sm text-gray-600'>독서성향</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-body-lg-bold text-gray-800'>
          20대
        </div>
        <span className='text-body-sm text-gray-600'>연령대</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-body-lg-bold text-gray-800'>
          남자
        </div>
        <span className='text-body-sm text-gray-600'>성별</span>
      </div>
      <div className='flex flex-col items-center gap-[4px]'>
        <div className='rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-body-lg-bold text-gray-800'>
          회사원
        </div>
        <span className='text-body-sm text-gray-600'>직업</span>
      </div>
    </div>
  );
}

export default UserType;
