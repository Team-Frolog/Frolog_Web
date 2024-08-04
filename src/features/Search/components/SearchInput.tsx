'use client';

import { useRouter } from 'next/navigation';
import { ClearIcon, SearchIcon } from 'public/icons';
import React, { useState, KeyboardEvent } from 'react';

function SearchInput() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      router.replace(`/search?query=${searchValue.trim()}`);
    }
  };

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
        onKeyDown={handleEnter}
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
