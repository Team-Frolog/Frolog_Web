import React from 'react';
import { Metadata } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { PAGES } from '@/constants/page';
import SearchInput from '@/features/Search/components/SearchInput';
import WellEntryHeader from '@/components/Header/WellEntryHeader';

function SearchMainPage() {
  return (
    <MainLayout extraClass='bg-white'>
      <WellEntryHeader title='책 검색' />
      <div className='w-full bg-white px-[24px]'>
        <SearchInput
          placeholder='책 제목 또는 저자를 검색해 보세요'
          route={PAGES.SEARCH}
        />
      </div>
    </MainLayout>
  );
}

export default SearchMainPage;

export const metadata: Metadata = {
  title: '도서 검색',
  description: '원하는 도서 검색하기',
  openGraph: {
    title: '도서 검색',
  },
  twitter: {
    title: '도서 검색',
  },
};
