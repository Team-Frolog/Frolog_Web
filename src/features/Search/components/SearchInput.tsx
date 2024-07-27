'use client';

import React from 'react';
import SearchIcon from 'public/icons/common/navigation/search-icon.svg';

function SearchInput() {
  return (
    <div className='relative flex w-full'>
      <input
        type='text'
        className='input-common input-light flex-1 pl-[48px] focus:border-main'
      />
      <SearchIcon
        fill='#8B95A1'
        className='absolute left-[16px] top-1/2 -translate-y-1/2'
      />
    </div>
  );
}

export default SearchInput;
