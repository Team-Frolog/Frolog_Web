'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import SearchInput from './SearchInput';
import CategoryResult from './CategoryResult';

function SearchHeader() {
  const searchValue = useSearchParams().get('query');

  return (
    <div className='sticky left-0 top-[60px] z-40 flex w-full flex-col gap-[16px] bg-white pb-[12px]'>
      <SearchInput />
      {searchValue && <CategoryResult />}
    </div>
  );
}

export default SearchHeader;
