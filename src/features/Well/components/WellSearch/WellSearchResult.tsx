'use client';

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useSearchWells } from '@/features/Well/hooks/useSearchWells';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useObserver } from '@/hooks/gesture/useObserver';
import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/WellSearchItemSkeleton';

function WellSearchResult() {
  const {
    searchResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useSearchWells();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <WellSearchItemSkeleton />;

  return (
    <MainLayout extraClass='gap-[36px] pb-[36px] pt-[24px] bg-gray-300'>
      {searchResult.map((resultItem) => (
        <WellSearchItem
          key={resultItem.id}
          userId={resultItem.id}
          wells={resultItem.wells}
        />
      ))}
      {isFetchingNextPage ? (
        <WellSearchItemSkeleton />
      ) : (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </MainLayout>
  );
}

export default WellSearchResult;
