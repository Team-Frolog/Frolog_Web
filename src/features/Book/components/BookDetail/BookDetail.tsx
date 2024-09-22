'use client';

import React, { useState } from 'react';
import Tap from '@/components/Tap/Tap';
import BookInfo from './BookInfo';
import ReviewsForBook from './ReviewsForBook';

interface Props {
  bookId: string;
}

function BookDetail({ bookId }: Props) {
  const [currentTap, setCurrentTap] = useState(1);
  return (
    <div className='w-full'>
      <Tap
        taps={[
          { id: 1, name: '도서 정보' },
          { id: 2, name: '리뷰 모음' },
        ]}
        currentTap={currentTap}
        setCurrentTap={setCurrentTap}
      />
      {currentTap === 1 && <BookInfo bookId={bookId} />}
      {currentTap === 2 && <ReviewsForBook />}
    </div>
  );
}

export default BookDetail;
