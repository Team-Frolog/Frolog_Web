import React from 'react';
import ProfileHeaderSkeleton from '../Profile/ProfileHeaderSkeleton';

function FeedSkeleton() {
  return (
    <div className='w-full'>
      <ProfileHeaderSkeleton />
      <div className='flex w-full flex-col'>
        <div className='flex w-full flex-col'>
          <div className='pt-[30px]'>
            <div className='relative flex w-full gap-[16px] rounded-t-[20px] bg-gray-200 px-page pt-[24px]'>
              <div className='skeleton-animation h-[110px] w-[74px] shrink-0 self-end bg-gray-400' />
              <div className='flex w-full flex-col gap-[12px]'>
                <div className='skeleton-animation skeleton-text h-[40px] w-[100px]' />
                <div className='skeleton-animation skeleton-box h-[52px] w-[200px]' />
              </div>
            </div>
          </div>
          <div className='skeleton-animation flex-column gap-[20px] bg-white px-page py-[20px]'>
            <div className='flex-col-center w-full gap-[8px]'>
              <div className='skeleton-line h-[30px]' />
              <div className='skeleton-line h-[30px]' />
            </div>
            <div className='flex-column gap-[12px]'>
              <span className='skeleton-text h-[32px] w-[180px]' />
              <span className='skeleton-line h-[40px]' />
            </div>
            <span className='skeleton-text w-[80px]' />
          </div>
        </div>
        <div className='skeleton-animation flex w-full items-center justify-between rounded-b-[20px] border-t border-t-gray-400 bg-white px-page py-[12px]'>
          <div className='skeleton-box h-[28px] w-[100px] rounded-[8px]' />
          <div className='skeleton-box h-[28px] w-[100px] rounded-[8px]' />
        </div>
      </div>
    </div>
  );
}

export default FeedSkeleton;
