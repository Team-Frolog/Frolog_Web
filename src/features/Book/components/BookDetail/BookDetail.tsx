'use client';

import React, { useState } from 'react';
import BookDetailTap from './BookDetailTap';
import BookInfo from './BookInfo';
import ReviewsForBook from './ReviewsForBook';

interface Props {
  bookId: string;
}

function BookDetail({ bookId }: Props) {
  const [currentTap, setCurrentTap] = useState('도서 정보');
  return (
    <div className='w-full'>
      <BookDetailTap currentTap={currentTap} setCurrentTap={setCurrentTap} />
      {currentTap === '도서 정보' && <BookInfo bookId={bookId} />}
      {currentTap === '리뷰 모음' && <ReviewsForBook />}
    </div>
  );
}

export default BookDetail;
