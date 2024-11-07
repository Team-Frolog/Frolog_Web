'use client';

import Image from 'next/image';
import React from 'react';
import { useBook } from '@/features/Book';
import { IMAGES } from '@/constants/images';
import Book from './Book';

interface Props {
  bookId: string;
  titleWidth?: string;
}

function BookInfo({ bookId, titleWidth = '80%' }: Props) {
  const { bookData } = useBook(bookId);

  return (
    <div
      id='book-info'
      className='flex-col-center relative w-full gap-[20px] bg-white pb-[24px] pt-[48px] text-gray-800'
    >
      <div className='absolute left-0 top-0 z-0 h-[230px] w-full mobile:h-[200px]'>
        <Image
          src={IMAGES.book.background}
          alt='bg'
          layout='fill'
          className='object-cover'
          loading='eager'
          priority
        />
      </div>

      <Book imageUrl={bookData?.image} />
      <div className='flex-col-center gap-[4px]'>
        <h3
          className='text-center text-title-lg-bold'
          style={{ width: titleWidth }}
        >
          {bookData?.title}
        </h3>
        <ul className='flex text-body-sm text-gray-600'>
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
