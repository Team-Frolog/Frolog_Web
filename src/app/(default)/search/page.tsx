import SearchResultSkeleton from '@/components/Fallback/Skeleton/SearchResultSkeleton';
import TitleHeader from '@/components/Header/TitleHeader';
import { SearchHeader } from '@/features/Search';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import React from 'react';

const SearchResult = dynamic(
  () => import('@/features/Search/components/SearchResult'),
  {
    ssr: false,
    loading: () => <SearchResultSkeleton />,
  }
);

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

      <MainLayout isCenter={false} extraClass='px-[24px] bg-white'>
        <SearchResult />
      </MainLayout>
    </>
  );
}

export default SearchPage;
