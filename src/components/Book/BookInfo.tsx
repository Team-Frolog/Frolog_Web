'use client';

import Image from 'next/image';
import React from 'react';
import { getPath } from '@/utils/getPath';
import { useIsInFeed } from '@/store/userActionStore';
import { IMAGES } from '@/constants/images';
import { GetBookRes } from '@frolog/frolog-api';
import Book from './Book';
import CustomLink from '../Link/CustomLink';

interface Props {
  /** 도서 id */
  bookId: string;
  /** 도서를 클릭하여 도서 상세 페이지로 넘어갈 수 있는지의 여부 */
  canClick?: boolean;
  bookData: GetBookRes;
}

/** 도서 상세 페이지, 리뷰/메모 리스트 내 도서 정보 컴포넌트 (도서 커버, 배경 포함) */
function BookInfo({ bookId, bookData, canClick = false }: Props) {
  const isInFeed = useIsInFeed();

  return (
    <CustomLink
      id='book-info'
      prefetch
      replace={isInFeed}
      href={canClick ? getPath.book(bookId) : ''}
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
    </CustomLink>
  );
}

export default BookInfo;
