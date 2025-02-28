'use client';

import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/WellSearchItemSkeleton';
import Observer from '@/components/Gesture/Observer';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useExploreWells } from '@/features/Well/hooks/useExploreWells';
import { useObserver } from '@/hooks/gesture/useObserver';
import React from 'react';

interface Props {
  refTime: string;
}

function WellExploreList({ refTime }: Props) {
  const {
    exploreResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useExploreWells(refTime);

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
      <Observer
        setTarget={setTarget}
        fallback={<WellSearchItemSkeleton />}
        isFetching={isFetchingNextPage}
      />
    </div>
  );
}

export default WellExploreList;
