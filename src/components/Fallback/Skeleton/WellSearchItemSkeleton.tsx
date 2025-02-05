import React from 'react';
import ProfileHeaderSkeleton from './ProfileHeaderSkeleton';

function WellSearchItemSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[30px]'>
      <ProfileHeaderSkeleton />
      <div className='skeleton-animation skeleton-box flex h-[200px] w-full rounded-[20px]' />
    </div>
  );
}

export default WellSearchItemSkeleton;
