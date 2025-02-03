import TitleHeader from '@/components/Header/TitleHeader';
import { SearchInput } from '@/features/Search';
import React from 'react';

function WellSearchPage() {
  return (
    <>
      <div className='flex h-fit w-full flex-col'>
        <TitleHeader
          title='탐색'
          type='no_border'
          theme='gray'
          hasButton={false}
        />
        <div className='sticky left-0 top-[60px] z-60 flex w-full flex-col gap-[16px] px-[24px] pb-[12px]'>
          <SearchInput placeholder='우물 키워드를 검색해보세요' />
        </div>
      </div>
      <div>result</div>
    </>
  );
}

export default WellSearchPage;
