'use client';

import { PAGES } from '@/constants/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { ClearIcon, SearchIcon } from 'public/icons';
import React, { useState, KeyboardEvent } from 'react';

interface Props {
  isMain?: boolean;
}

function SearchInput({ isMain = false }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams().get('query');
  const [searchValue, setSearchValue] = useState(searchParams || '');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      const value = searchValue.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim, '');
      setSearchValue(value);
      router.replace(`/search?query=${value}`);
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
        autoFocus={!isMain}
        enterKeyHint='search'
        placeholder='책 제목 또는 저자를 검색해 보세요.'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={isMain ? () => router.push(PAGES.SEARCH) : undefined}
        onKeyDown={handleEnter}
        className='input-common input-light w-full px-[48px] placeholder:text-gray-600 focus:border-main'
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
