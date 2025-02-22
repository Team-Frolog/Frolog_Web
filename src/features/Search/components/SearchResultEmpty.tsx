import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

interface Props {
  target: string;
  content: string;
}

/** 검색 결과가 없는 경우 개구리 컴포넌트 */
function SearchResultEmpty({ target, content }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-[20px]'>
      <h5 className='text-title-xl-bold text-gray-800'>
        일치하는 {target}을
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
        {content}을 다시 검색해주세요
      </span>
    </div>
  );
}

export default SearchResultEmpty;
