import React from 'react';

function FrogSelectorSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>내 캐릭터</h6>
      <div className='skeleton-animation flex flex-wrap gap-[9px] overflow-hidden'>
        <div className='skeleton-box h-[178px] max-w-[105px] flex-1 rounded-[12px]' />
        <div className='skeleton-box h-[178px] max-w-[105px] flex-1 rounded-[12px]' />
        <div className='skeleton-box h-[178px] max-w-[105px] flex-1 rounded-[12px]' />
      </div>
    </div>
  );
}

export default FrogSelectorSkeleton;
