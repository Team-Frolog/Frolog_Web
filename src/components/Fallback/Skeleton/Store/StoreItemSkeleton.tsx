import React from 'react';

function StoreItemSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='skeleton-animation grid grid-cols-3 gap-[9px] overflow-hidden'>
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
        <div className='skeleton-box h-[210px] w-full flex-1 rounded-[12px] mobile:h-[180px]' />
      </div>
    </div>
  );
}

export default StoreItemSkeleton;
