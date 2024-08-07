import TitleHeader from '@/components/Header/TitleHeader';
import { SearchHeader, SearchResult } from '@/features/Search';
import React from 'react';

function SearchPage() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <TitleHeader title='책 검색' type='default' theme='light' />
      <div className='flex flex-1 flex-col px-[24px]'>
        <SearchHeader />
        <SearchResult />
      </div>
    </div>
  );
}

export default SearchPage;
