import React from 'react';

function WellListSkeleton() {
  return (
    <div className='relative flex w-full flex-col bg-gray-300 pb-[30px]'>
      <div className='grid grid-cols-2 gap-[24px] px-page py-[12px]'>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
        <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
          <div className='flex-center skeleton-box skeleton-animation h-[160px] w-[160px] rounded-[50%]' />
          <p className='skeleton-text w-[70px]' />
        </div>
      </div>
    </div>
  );
}

export default WellListSkeleton;
