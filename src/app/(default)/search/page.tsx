import TitleHeader from '@/components/Header/TitleHeader';
import { SearchHeader, SearchResult } from '@/features/Search';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '도서 검색',
  description: '원하는 도서 검색하기',
};

function SearchPage() {
  return (
    <>
      <div className='flex h-fit w-full flex-col'>
        <TitleHeader
          title='책 검색'
          type='no_border'
          theme='light'
          hasButton={false}
        />
        <SearchHeader />
      </div>
      <SearchResult />
    </>
  );
}

export default SearchPage;
