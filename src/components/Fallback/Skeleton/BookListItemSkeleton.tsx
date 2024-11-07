import React from 'react';

function BookListItemSkeleton() {
  return (
    <div className='skeleton-animation flex w-full cursor-pointer gap-[20px]'>
      <div className='skeleton-box h-[180px] w-[120px]' />
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <span className='skeleton-text h-[28px] w-1/2' />
          <span className='skeleton-text h-[14px] w-2/3 rounded-[6px]' />
        </div>
        <div className='flex flex-col gap-[8px]'>
          <div className='skeleton-box h-[28px] w-2/3 rounded-[8px]' />
          <div className='flex flex-col gap-[4px]'>
            <div className='skeleton-box h-[30px] w-[100px] rounded-[8px]' />
            <div className='skeleton-box h-[30px] w-[100px] rounded-[8px]' />
          </div>
          <span className='skeleton-text h-[14px] w-[50px] rounded-[6px]' />
        </div>
      </div>
    </div>
  );
}

export default BookListItemSkeleton;
