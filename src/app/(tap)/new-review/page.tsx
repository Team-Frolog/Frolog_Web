import BookInfo from '@/components/common/book/BookInfo';
import RatingSelector from '@/components/common/rating/RatingSelector';
import React from 'react';

function NewReviewPage() {
  return (
    <div className='flex h-fit w-full flex-1 flex-col items-center bg-white text-gray-800'>
      <BookInfo />
      <RatingSelector />
      <div>태그 컴포넌트</div>
      <div>한줄평</div>
      <div>리뷰</div>
      <div>완료 버튼</div>
    </div>
  );
}

export default NewReviewPage;
