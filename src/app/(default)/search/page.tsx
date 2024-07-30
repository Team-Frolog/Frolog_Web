import TitleHeader from '@/components/Header/TitleHeader';
import { CategoryResult, SearchInput, SearchResult } from '@/features/Search';
import React from 'react';

function SearchPage() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <TitleHeader title='책 검색' type='default' theme='light' />
      <div className='flex flex-1 flex-col px-[24px]'>
        <div className='sticky left-0 top-[52px] z-40 flex w-full flex-col gap-[16px] bg-white pb-[12px]'>
          <SearchInput />
          <CategoryResult />
        </div>
        <SearchResult />
      </div>
    </div>
  );
}

export default SearchPage;
