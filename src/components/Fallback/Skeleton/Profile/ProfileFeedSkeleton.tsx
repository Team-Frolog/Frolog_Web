import React from 'react';

function ProfileFeedSkeleton() {
  return (
    <div className='skeleton-animation flex aspect-[9/16] w-[calc(50%-10px)] flex-col overflow-hidden rounded-[12px]'>
      <div className='skeleton-box flex-[8] rounded-b-[0] bg-gray-400' />
      <div className='flex flex-[2] flex-col gap-[1px] bg-white'>
        <div className='skeleton-text h-[46px] rounded-[0] bg-gray-200' />
        <div className='skeleton-text h-[46px] rounded-t-[0] bg-gray-200' />
      </div>
    </div>
  );
}

export default ProfileFeedSkeleton;
