'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useBook } from '@/features/Book';
import { IMAGES } from '@/constants/images';
import Book from './Book';

interface Props {
  bookId: string;
  canClick?: boolean;
}

function BookInfo({ bookId, canClick = false }: Props) {
  const { bookData } = useBook(bookId);

  return (
    <Link
      id='book-info'
      prefetch
      href={canClick ? `/book/${bookId}` : ''}
      className={`flex-col-center relative w-full gap-[20px] bg-white pb-[24px] pt-[48px] text-gray-800 ${canClick ? '' : 'pointer-events-none'}`}
    >
      <div className='absolute left-0 top-0 z-0 h-[230px] w-full mobile:h-[200px]'>
        <Image
          src={IMAGES.book.background}
          alt='bg'
          layout='fill'
          className='object-cover'
          loading='eager'
          priority
          unoptimized
        />
      </div>

      <Book imageUrl={bookData?.image} canClick={canClick} />
      <div className='flex-col-center w-[80%] gap-[4px]'>
        <h3 className='text-center text-title-lg-bold'>{bookData?.title}</h3>
        <span className='flex text-body-sm text-gray-600'>
          {bookData?.author} | {bookData?.publisher}
        </span>
      </div>
    </Link>
  );
}

export default BookInfo;
