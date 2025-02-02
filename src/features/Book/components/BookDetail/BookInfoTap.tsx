'use client';

import React, { useState } from 'react';
import Tab from '@/components/Tab/Tab';
import BookInfo from './BookInfo';
import ReviewsForBook from '../ReviewsForBook/ReviewsForBook';

interface Props {
  bookId: string;
}

/** 도서 상세 페이지 중 도서 정보/리뷰 모음 탭 컴포넌트 */
function BookInfoTap({ bookId }: Props) {
  const [currentTab, setCurrentTap] = useState('bookInfo');
  return (
    <div className='w-full'>
      <Tab
        tabs={[
          { id: 1, label: 'bookInfo', name: '도서 정보' },
          { id: 2, label: 'reviews', name: '리뷰 모음' },
        ]}
        currentTab={currentTab}
        defaultTab='bookInfo'
        onChangeTab={(label: string) => setCurrentTap(label)}
      />
      {currentTab === 'bookInfo' && <BookInfo bookId={bookId} />}
      {currentTab === 'reviews' && <ReviewsForBook bookId={bookId} />}
    </div>
  );
}

export default BookInfoTap;
