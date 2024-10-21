'use client';

import React from 'react';
import { Well, useWells } from '@/features/Well';
import { useObserver } from '@/hooks/gesture/useObserver';
import WellItemsSkeleton from '@/components/Fallback/Skeleton/WellItemsSkeleton';

interface Props {
  userId: string;
  callback: (value?: any) => void;
}

function WellSelectSheet({ callback, userId }: Props) {
  const { wells, hasNextPage, fetchNextPage, isFetchingNextPage, isFetched } =
    useWells(userId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div className='grid max-h-[400px] w-full grid-cols-2 justify-center justify-items-center gap-[20px] overflow-y-auto py-[20px] pb-[40px] scrollbar-hide'>
      {!isFetched && <WellItemsSkeleton />}
      {isFetched &&
        wells.map((well) => (
          <Well
            type='select'
            key={well.id}
            wellData={well}
            onClick={() => callback(well.id)}
          />
        ))}
      {!isFetchingNextPage && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default WellSelectSheet;
