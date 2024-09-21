import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SideHeader from '@/components/Header/SideHeader';
import SearchInput from '@/features/Search/components/SearchInput';

function SearchMainPage() {
  return (
    <MainLayout>
      <SideHeader title='책 검색' />
      <div className='w-full bg-white px-[24px]'>
        <SearchInput isMain />
      </div>
    </MainLayout>
  );
}

export default SearchMainPage;
