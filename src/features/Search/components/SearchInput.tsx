'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ClearIcon, SearchIcon } from 'public/icons';
import React, { useState, KeyboardEvent } from 'react';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams().get('query');
  const [searchValue, setSearchValue] = useState(searchParams || '');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      router.replace(`/search?query=${searchValue.trim()}`);
    }
  };

  return (
    <div className='relative flex w-full overflow-auto'>
      <SearchIcon
        fill='#8B95A1'
        className='absolute left-[16px] top-1/2 -translate-y-1/2'
      />
      <input
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnter}
        className='input-common input-light w-full px-[48px] focus:border-main'
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
