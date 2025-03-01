import React from 'react';

function WellItemSkeleton() {
  return (
    <div className='flex w-full flex-col'>
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
      <div className='skeleton-box skeleton-animation h-[55px] w-full' />
    </div>
  );
}

export default WellItemSkeleton;
