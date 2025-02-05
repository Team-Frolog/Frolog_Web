import WellSearchItemSkeleton from '@/components/Fallback/Skeleton/WellSearchItemSkeleton';
import { PAGES } from '@/constants/page';
import { SearchInput } from '@/features/Search';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';
import React from 'react';

function ExplorePage() {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex px-[24px] pb-[20px]'>
        <SearchInput
          route={PAGES.WELL_SEARCH}
          placeholder='우물 키워드를 검색해보세요'
        />
      </div>
      <div className='flex w-full flex-col gap-[36px]'>
        <WellSearchItem />
        <WellSearchItemSkeleton />
      </div>
    </div>
  );
}

export default ExplorePage;
