import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

function SearchResultEmpty() {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-[20px]'>
      <h5 className='text-title-xl-bold text-gray-800'>
        일치하는 책을
        <br />
        찾지 못했어요!
      </h5>
      <Image
        src={IMAGES.frog.fallback.search}
        alt='search'
        width={120}
        height={120}
      />
      <span className='text-body-lg text-gray-600'>
        책 제목이나 저자명을 다시 검색해주세요
      </span>
    </div>
  );
}

export default SearchResultEmpty;
