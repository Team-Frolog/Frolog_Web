'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import WellEntryHeader from '@/components/Header/WellEntryHeader';
import useAddBookStore from '@/store/addBookStore';
import { SearchInput } from '@/features/Search';

function SearchMainPage() {
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
        <SearchInput isMain />
      </div>
    </MainLayout>
  );
}

export default SearchMainPage;
