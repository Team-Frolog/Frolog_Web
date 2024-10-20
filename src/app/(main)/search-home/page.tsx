'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SideHeader from '@/components/Header/SideHeader';
import SearchInput from '@/features/Search/components/SearchInput';
import useAddBookStore from '@/store/addBookStore';

function SearchMainPage() {
  const {
    actions: { resetWellId },
  } = useAddBookStore();

  useEffect(() => {
    resetWellId();
  }, []);

  return (
    <MainLayout extraClass='bg-white'>
      <SideHeader title='책 검색' />
      <div className='w-full bg-white px-[24px]'>
        <SearchInput isMain />
      </div>
    </MainLayout>
  );
}

export default SearchMainPage;
