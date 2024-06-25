import React from 'react';
import BookItem from '../common/book/BookItem';
import { booksByType } from '@/data/dummy/booksByType';

interface Props {
  type: number;
}

function BooksByType({ type }: Props) {
  return (
    <div className='flex w-full flex-col items-center gap-[36px] rounded-t-[12px] bg-white px-[32px] py-[36px] text-gray-800'>
      <h2 className='text-title_xl_bold'>이런 책을 좋아하실거에요!</h2>
      {booksByType.map((book) => (
        <BookItem key={book.id} bookData={book} />
      ))}
    </div>
  );
}

export default BooksByType;
