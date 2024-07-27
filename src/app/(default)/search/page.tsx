import TitleHeader from '@/components/Header/TitleHeader';
import { SearchInput } from '@/features/Search';
import CategoryResult from '@/features/Search/components/CategoryResult';
import React from 'react';

function SearchPage() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <TitleHeader title='책 검색' type='default' />
      <div className='flex flex-col gap-[16px] px-[24px]'>
        <SearchInput />
        <CategoryResult />
      </div>
    </div>
  );
}

export default SearchPage;
