import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';
import Book from './Book';

function BookInfo({ bookId }: { bookId: string }) {
  console.log(bookId);
  return (
    <div
      id='book-info'
      className='flex-col-center relative w-full gap-[20px] bg-white py-[24px] text-gray-800'
    >
      <Image
        src={IMAGES.book.background}
        alt='bg'
        width={390}
        height={182}
        className='absolute left-0 top-0 z-0 w-full'
      />
      <Book />
      <div className='flex-col-center gap-[4px]'>
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
