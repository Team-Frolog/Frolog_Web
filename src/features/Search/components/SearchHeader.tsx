import React from 'react';
import SearchInput from './SearchInput';

/** input이 포함된 검색 페이지 헤더 */
function SearchHeader() {
  return (
    <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] bg-white px-[24px] pb-[12px]'>
      <SearchInput />
    </div>
  );
}

export default SearchHeader;
