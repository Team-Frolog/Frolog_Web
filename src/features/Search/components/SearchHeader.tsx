import React from 'react';
import SearchInput from './SearchInput';

/** input이 포함된 검색 페이지 헤더 */
function SearchHeader() {
  return (
    <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] bg-white px-[24px] pb-[12px]'>
      <SearchInput placeholder='책 제목 또는 저자를 검색해 보세요' />
    </div>
  );
}

export default SearchHeader;
