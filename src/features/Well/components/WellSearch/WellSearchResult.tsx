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
import { SEARCH_ITEM } from '@/constants/searchItem';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import WellSearchItemListSkeleton from '@/components/Fallback/Skeleton/WellSearchItemListSkeleton';

function WellSearchResult() {
  const {
    searchResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isEmpty,
    isFetched,
    isFetchingNextPage,
  } = useSearchWells();

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'wellSearch',
  });

  if (isLoading) return <WellSearchItemListSkeleton />;

  return (
    <MainLayout extraClass='gap-[36px] pb-[36px] pt-[24px] bg-gray-300'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={
          <SearchResultEmpty
            target={SEARCH_ITEM.well.target}
            content={SEARCH_ITEM.well.content}
          />
        }
      >
        {searchResult.map((resultItem) => (
          <WellSearchItem
            key={resultItem.id}
            userId={resultItem.id}
            wells={resultItem.wells}
            onSaveScroll={saveScroll}
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
