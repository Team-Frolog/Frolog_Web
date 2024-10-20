import React from 'react';
import SearchInput from './SearchInput';
import CategoryResult from './Category/CategoryResult';

function SearchHeader() {
  return (
    <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] bg-white px-[24px] pb-[12px]'>
      <SearchInput />
      <CategoryResult />
    </div>
  );
}

export default SearchHeader;
