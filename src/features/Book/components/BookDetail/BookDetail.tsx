'use client';

import React, { useState } from 'react';
import Tap from '@/components/Tap/Tap';
import BookInfo from './BookInfo';
import ReviewsForBook from './ReviewsForBook';

interface Props {
  bookId: string;
}

function BookDetail({ bookId }: Props) {
  const [currentTap, setCurrentTap] = useState('bookInfo');
  return (
    <div className='w-full'>
      <Tap
        taps={[
          { id: 1, label: 'bookInfo', name: '도서 정보' },
          { id: 2, label: 'reviews', name: '리뷰 모음' },
        ]}
        currentTap={currentTap}
        defaultTap='bookInfo'
        onChangeTap={(label: string) => setCurrentTap(label)}
      />
      {currentTap === 'bookInfo' && <BookInfo bookId={bookId} />}
      {currentTap === 'reviews' && <ReviewsForBook bookId={bookId} />}
    </div>
  );
}

export default BookDetail;
