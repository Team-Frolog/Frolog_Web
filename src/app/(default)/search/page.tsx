import TitleHeader from '@/components/Header/TitleHeader';
import { SearchHeader, SearchResult } from '@/features/Search';
import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '도서 검색',
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

      <MainLayout isCenter={false} extraClass='px-[24px] bg-white safe-bottom'>
        <SearchResult />
      </MainLayout>
    </>
  );
}

export default SearchPage;
