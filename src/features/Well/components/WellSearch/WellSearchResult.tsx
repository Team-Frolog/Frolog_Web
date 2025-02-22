'use client';

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useSearchWells } from '@/features/Well/hooks/useSearchWells';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useObserver } from '@/hooks/gesture/useObserver';
import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/WellSearchItemSkeleton';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import SearchResultEmpty from '@/features/Search/components/SearchResultEmpty';

function WellSearchResult() {
  const refTime = new Date().toISOString();
  const {
    searchResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isEmpty,
    isFetchingNextPage,
  } = useSearchWells(refTime);
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <WellSearchItemSkeleton />;

  return (
    <MainLayout extraClass='gap-[36px] pb-[36px] pt-[24px] bg-gray-300'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<SearchResultEmpty />}
      >
        {searchResult.map((resultItem) => (
          <WellSearchItem
            key={resultItem.id}
            userId={resultItem.id}
            wells={resultItem.wells}
          />
        ))}
        <Observer
          setTarget={setTarget}
          fallback={<WellSearchItemSkeleton />}
          isFetching={isFetchingNextPage}
        />
      </WithConditionalRendering>
    </MainLayout>
  );
}

export default WellSearchResult;
