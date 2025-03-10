import React from 'react';
import { SearchHome } from '@/features/Search';
import { Metadata } from 'next';

function SearchMainPage() {
  return <SearchHome />;
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
