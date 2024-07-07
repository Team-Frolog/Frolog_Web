import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';
import Book from './Book';

function BookInfo() {
  return (
    <div className='relative flex w-full flex-col items-center gap-[20px] pt-[24px]'>
      <Image
        src={IMAGES.book.background}
        alt='bg'
        width={390}
        height={182}
        className='absolute left-0 top-0 z-0 w-full'
      />
      <Book />
      <div className='flex flex-col items-center gap-[4px]'>
        <h3 className='text-title_lg_bold'>메리와 메리</h3>
        <ul className='flex text-body_sm text-gray-600'>
          <li className="after:content-['|']">
            <span className='px-[6px]'>샬럿 고든</span>
          </li>
          <li>
            <span className='px-[6px]'>민음사</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookInfo;
