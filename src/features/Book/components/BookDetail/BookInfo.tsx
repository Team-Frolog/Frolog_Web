import React from 'react';
import { useBook } from '../../hooks/useBook';

interface Props {
  bookId: string;
}

function BookInfo({ bookId }: Props) {
  const { bookData } = useBook(bookId);

  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='book-info-title'>출판사</h5>
          <span className='book-info-sub'>{bookData?.publisher}</span>
        </div>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='book-info-title'>ISBN</h5>
          <span className='book-info-sub'>{bookId}</span>
        </div>
      </div>
      <hr className='h-[2px] w-full bg-gray-300' />
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <h5 className='book-info-title'>책 소개</h5>
        <p className='book-info-sub safe-bottom break-all'>{bookData?.desc}</p>
      </div>
    </div>
  );
}

export default BookInfo;
