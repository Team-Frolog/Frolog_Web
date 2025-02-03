import { PAGES } from '@/constants/page';
import { SearchInput } from '@/features/Search';
import React from 'react';

function OthersPage() {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex px-[24px]'>
        <SearchInput
          route={PAGES.WELL_SEARCH}
          placeholder='우물 키워드를 검색해보세요'
        />
      </div>
    </div>
  );
}

export default OthersPage;
