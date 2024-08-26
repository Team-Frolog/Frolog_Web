import React from 'react';
import SearchInput from './SearchInput';
import CategoryResult from './Category/CategoryResult';

function SearchHeader() {
  return (
    <div className='z-60 sticky left-0 top-[60px] flex w-full flex-col gap-[16px] bg-white px-[24px] pb-[12px]'>
      <SearchInput />
      <CategoryResult />
    </div>
  );
}

export default SearchHeader;
