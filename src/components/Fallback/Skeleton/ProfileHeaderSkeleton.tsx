import React from 'react';

function ProfileHeaderSkeleton() {
  return (
    <div className='flex w-full items-center justify-between px-page'>
      <div className='flex items-center gap-[8px]'>
        <div className='skeleton-animation h-[40px] w-[40px] rounded-[50%] bg-gray-400' />
        <span className='skeleton-text skeleton-animation h-[24px] w-[170px]' />
      </div>
      <div className='skeleton-animation skeleton-box h-[34px] w-[90px]' />
    </div>
  );
}

export default ProfileHeaderSkeleton;
