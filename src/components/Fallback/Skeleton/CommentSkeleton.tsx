import React from 'react';

function CommentSkeleton() {
  return (
    <div className='skeleton-animation flex w-full shrink-0 flex-col gap-[12px]'>
      <div className='flex w-full items-center justify-between px-page'>
        <div className='flex items-center gap-[8px]'>
          <div className=' h-[40px] w-[40px] rounded-[50%] bg-gray-400' />
          <span className='skeleton-text h-[24px] w-[170px]' />
        </div>
        <div className='skeleton-box h-[20px] w-[40px]' />
      </div>
      <div className='flex px-page'>
        <p className='skeleton-line px-page' />
      </div>
      <div className='flex items-center justify-between px-page'>
        <div className='skeleton-box h-[24px] w-[100px] rounded-[8px]' />
        <span className='skeleton-text w-[100px]' />
      </div>
    </div>
  );
}

export default CommentSkeleton;
