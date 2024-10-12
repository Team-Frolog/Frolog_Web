import React from 'react';

function ProfileSkeleton() {
  return (
    <div className='flex w-full flex-1 flex-col gap-[28px] bg-white px-page'>
      <div className='skeleton-animation flex w-full flex-col gap-[16px]'>
        <div className='flex w-full items-center gap-[30px]'>
          <div className='skeleton-box h-[76px] w-[76px] shrink-0 rounded-[50%]' />
          <div className='flex w-full items-center gap-[24px]'>
            <div className='skeleton-box h-[50px] flex-1 ' />
            <div className='skeleton-box h-[50px] flex-1' />
            <div className='skeleton-box h-[50px] flex-1' />
          </div>
        </div>
        <div className='flex w-full flex-col gap-[4px]'>
          <h5 className='skeleton-text h-[24px] w-[150px]' />
          <p className='skeleton-line' />
        </div>
      </div>
      <div className='skeleton-animation flex gap-[8px]'>
        <div className='flex h-[58px] flex-1 flex-col gap-[4px]'>
          <div className='skeleton-box h-[36px]' />
          <span className='skeleton-text h-[18px] w-full' />
        </div>
        <div className='flex h-[58px] flex-1 flex-col gap-[4px]'>
          <div className='skeleton-box h-[36px]' />
          <span className='skeleton-text h-[18px] w-full' />
        </div>
        <div className='flex h-[58px] flex-1 flex-col gap-[4px]'>
          <div className='skeleton-box h-[36px]' />
          <span className='skeleton-text h-[18px] w-full' />
        </div>
        <div className='flex h-[58px] flex-1 flex-col gap-[4px]'>
          <div className='skeleton-box h-[36px]' />
          <span className='skeleton-text h-[18px] w-full' />
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
