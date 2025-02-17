'use client';

import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/WellSearchItemSkeleton';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useExploreWells } from '@/features/Well/hooks/useExploreWells';
import { useObserver } from '@/hooks/gesture/useObserver';
import React from 'react';

function WellExploreList() {
  const {
    exploreResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useExploreWells();

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (!exploreResult || isLoading) return <WellSearchItemSkeleton />;

  return (
    <div className='flex w-full flex-col gap-[36px]'>
      {exploreResult.pages.map(({ id, wells }) => (
        <WellSearchItem key={id} userId={id} wells={wells} />
      ))}
      {isFetchingNextPage || isLoading ? (
        <WellSearchItemSkeleton />
      ) : (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default WellExploreList;
