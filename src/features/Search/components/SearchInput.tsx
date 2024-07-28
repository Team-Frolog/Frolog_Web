'use client';

import React, { useState } from 'react';
import SearchIcon from 'public/icons/common/navigation/search-icon.svg';
import ClearIcon from 'public/icons/common/clear.svg';

function SearchInput() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='relative flex w-full bg-white'>
      <SearchIcon
        fill='#8B95A1'
        className='absolute left-[16px] top-1/2 -translate-y-1/2'
      />
      <input
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='input-common input-light flex-1 px-[48px] focus:border-main'
      />
      {searchValue && (
        <button
          type='button'
          onClick={() => setSearchValue('')}
          className='absolute right-[16px] top-1/2 -translate-y-1/2'
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
