import React from 'react';

function ReviewListSkeleton() {
  return (
    <div className='review-item z-10 px-0 pb-0'>
      <div className='skeleton-animation flex w-full flex-col gap-[12px] px-[24px]'>
        <div className='flex w-full cursor-pointer flex-col gap-[12px]'>
          <div>
            <div className='skeleton-text h-[25px] w-[80px] rounded-[20px]' />
          </div>
          <div className='skeleton-box h-[64px] w-1/2' />
          <div className='skeleton-line h-[34px]' />
        </div>
        <div className='flex-col-center w-full gap-[8px]'>
          <div className='skeleton-line h-[30px]' />
          <div className='skeleton-line h-[30px]' />
        </div>
        <span className='skeleton-text w-[120px]' />
      </div>

      <div className='flex h-fit w-full flex-col'>
        <hr className='w-full border-[0.5px] border-gray-400' />
        <div className='flex h-fit w-full justify-center py-[24px]'>
          <span className='skeleton-animation skeleton-text w-[80px]' />
        </div>
      </div>
    </div>
  );
}

export default ReviewListSkeleton;
