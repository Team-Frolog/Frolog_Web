import React from 'react';

function MemoListSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[20px] rounded-[20px] bg-white px-page py-[36px] pb-0 last:rounded-b-none'>
      <div className='skeleton-animation flex w-full flex-col gap-[20px]'>
        <div className='skeleton-box w-full pb-[100%]' />
        <p className=' skeleton-line h-[40px]' />
        <div className='flex w-full justify-between'>
          <span className='skeleton-text w-[120px]' />
          <span className='skeleton-text w-[40px]' />
        </div>
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

export default MemoListSkeleton;
