'use client';

import WellSearchItemListSkeleton from '@/components/Fallback/Skeleton/Well/WellSearchItemListSkeleton';
import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/Well/WellSearchItemSkeleton';
import Observer from '@/components/Gesture/Observer';
import ScrollToTop from '@/components/Gesture/ScrollToTop';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import { useExploreWells } from '@/features/Well/hooks/useExploreWells';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import { useScrollToTop } from '@/hooks/gesture/useScrollToTop';
import { SearchUserWellRes } from '@frolog/frolog-api';
import React from 'react';

interface Props {
  refTime: string;
  wellList: SearchUserWellRes;
}

function WellExploreList({ refTime, wellList }: Props) {
  const {
    exploreResult,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetched,
    isFetchingNextPage,
  } = useExploreWells(refTime, wellList);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'explore',
  });

  const { isRendering } = useScrollToTop();

  if (!exploreResult || isLoading) return <WellSearchItemListSkeleton />;

  return (
    <div className='flex w-full flex-col gap-[36px]'>
      {exploreResult.pages.map(({ id, wells }) => (
        <WellSearchItem
          key={id}
          userId={id}
          wells={wells}
          onSaveScroll={saveScroll}
        />
      ))}
      <Observer
        setTarget={setTarget}
        fallback={<WellSearchItemSkeleton />}
        isFetching={isFetchingNextPage}
      />
      {isRendering && <ScrollToTop />}
    </div>
  );
}

export default WellExploreList;
