import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import { SearchInput } from '@/features/Search';
import { WellSearchResult } from '@/features/Well';
import { PAGES } from '@/constants/page';
import { Metadata } from 'next';

async function WellSearchPage() {
  return (
    <>
      <div className='flex h-fit w-full flex-col'>
        <TitleHeader
          title='탐색'
          type='no_border'
          theme='gray'
          hasButton={false}
        />
        <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] bg-gray-300 px-[24px] pb-[12px]'>
          <SearchInput
            searchUrl={PAGES.WELL_SEARCH}
            placeholder='우물 키워드를 검색해보세요'
          />
        </div>
      </div>
      <WellSearchResult />
    </>
  );
}

export default WellSearchPage;

export const metadata: Metadata = {
  title: '우물 검색',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
