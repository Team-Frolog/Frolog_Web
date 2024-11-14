'use client';

import Image from 'next/image';
import React from 'react';
import { useBook } from '@/features/Book';
import { IMAGES } from '@/constants/images';
import { useRouter } from 'next/navigation';
import Book from './Book';

interface Props {
  bookId: string;
  canClick?: boolean;
}

function BookInfo({ bookId, canClick = false }: Props) {
  const router = useRouter();
  const { bookData } = useBook(bookId);

  return (
    <div
      id='book-info'
      onClick={canClick ? () => router.push(`/book/${bookId}`) : undefined}
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
      <div className='flex-col-center w-[80%] gap-[4px]'>
        <h3 className='text-center text-title-lg-bold'>{bookData?.title}</h3>
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
