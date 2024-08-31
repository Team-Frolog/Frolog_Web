'use client';

import Image from 'next/image';
import React from 'react';
import { useBook } from '@/features/Book';
import { IMAGES } from '@/constants/images';
import Book from './Book';

function BookInfo({ bookId }: { bookId: string }) {
  const { bookData } = useBook(bookId);

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
        <h3 className='text-title-lg-bold'>{bookData?.title}</h3>
        <ul className='text-body-sm flex text-gray-600'>
          <li className="after:content-['|']">
            <span className='px-[6px]'>{bookData?.author}</span>
          </li>
          <li>
            <span className='px-[6px]'>{bookData?.publisher}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookInfo;
