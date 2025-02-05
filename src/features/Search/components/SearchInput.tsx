'use client';

import { PAGES } from '@/constants/page';
import { useSearchParams } from 'next/navigation';
import { ClearIcon, SearchIcon } from 'public/icons';
import React, { useState, KeyboardEvent } from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';

interface Props {
  placeholder: string;
  /** 검색 경로 */
  searchUrl?: string;
  /** input 클릭 시 이동할 경로 (책 검색 페이지, 우물 탐색 페이지의 경우) */
  route?: string;
}

/** 검색 input 컴포넌트 */
function SearchInput({ placeholder, searchUrl = PAGES.SEARCH, route }: Props) {
  const { replace, navigate } = useCustomRouter('SEARCH');
  const searchParams = useSearchParams().get('query');
  const [searchValue, setSearchValue] = useState(searchParams || '');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      const value = searchValue
        .trim()
        // eslint-disable-next-line no-useless-escape
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim, '');
      setSearchValue(value);
      replace(`${searchUrl}?query=${value}`);
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
        autoFocus={!route}
        enterKeyHint='search'
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={route ? () => navigate(route) : undefined}
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
