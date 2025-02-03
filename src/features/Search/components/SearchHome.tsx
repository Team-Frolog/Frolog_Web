'use client';

import WellEntryHeader from '@/components/Header/WellEntryHeader';
import MainLayout from '@/layouts/MainLayout';
import useAddBookStore from '@/store/addBookStore';
import { PAGES } from '@/constants/page';
import React, { useEffect } from 'react';
import SearchInput from './SearchInput';

function SearchHome() {
  const {
    actions: { resetWellId },
  } = useAddBookStore();

  useEffect(() => {
    resetWellId();
  }, []);

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

export default SearchHome;
