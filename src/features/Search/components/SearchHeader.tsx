import React from 'react';
import dynamic from 'next/dynamic';
import CategoryResultSkeleton from '@/components/Fallback/Skeleton/CategoryResultSkeleton';
import SearchInput from './SearchInput';

const CategoryResult = dynamic(() => import('./Category/CategoryResult'), {
  ssr: false,
  loading: () => <CategoryResultSkeleton />,
});

function SearchHeader() {
  return (
    <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] bg-white px-[24px] pb-[12px]'>
      <SearchInput />
      <CategoryResult />
    </div>
  );
}

export default SearchHeader;
