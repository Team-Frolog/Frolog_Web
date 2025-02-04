import React from 'react';
import { NavItemKey } from '@/constants/nav';
import TitleHeader from '@/components/Header/TitleHeader';
import { SearchInput } from '@/features/Search';
import { WellSearchResult } from '@/features/Well';
import { PAGES } from '@/constants/page';

function WellSearchPage() {
  return (
    <>
      <div className='flex h-fit w-full flex-col'>
        <TitleHeader
          title='탐색'
          type='no_border'
          theme='gray'
          hasButton={false}
        />
        <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] px-[24px] pb-[12px]'>
          <SearchInput
            navKey={NavItemKey.WELL}
            searchUrl={PAGES.WELL_SEARCH}
            placeholder='우물 키워드를 검색해보세요'
          />
        </div>
      </div>
      <WellSearchResult />
    </>
  );
}

export default WellSearchPage;
