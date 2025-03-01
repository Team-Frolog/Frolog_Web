import React from 'react';

function WellItemsSkeleton() {
  return (
    <>
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
    </>
  );
}

export default WellItemsSkeleton;
