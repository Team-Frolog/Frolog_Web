import React from 'react';

function CategoryResultSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <span className='skeleton-text h-[24px] w-1/3' />
      <div className='skeleton-box h-[62px] w-full' />
    </div>
  );
}

export default CategoryResultSkeleton;
