'use client';

import { ClearIcon, SearchIcon } from 'public/icons';
import React, { useState } from 'react';

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
