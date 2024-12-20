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
          <h5 className='text-body-lg-bold text-gray-800'>출판사</h5>
          <span className='text-body-lg text-gray-600'>
            {bookData?.publisher}
          </span>
        </div>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='text-body-lg-bold text-gray-800'>ISBN</h5>
          <span className='text-body-lg text-gray-600'>{bookId}</span>
        </div>
      </div>
      <hr className='h-[2px] w-full bg-gray-300' />
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <h5 className='text-body-lg-bold text-gray-800'>책 소개</h5>
        <p className='safe-bottom break-all text-body-lg text-gray-600'>
          {bookData?.desc}
        </p>
      </div>
    </div>
  );
}

export default BookInfo;
