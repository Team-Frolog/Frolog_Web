import React from 'react';
import WellSearchItemSkeleton from './WellSearchItemSkeleton';

function WellSearchItemListSkeleton() {
  return (
    <div className='flex w-full flex-col gap-[36px] pb-[36px] pt-[24px]'>
      <WellSearchItemSkeleton />
      <WellSearchItemSkeleton />
      <WellSearchItemSkeleton />
    </div>
  );
}

export default WellSearchItemListSkeleton;
