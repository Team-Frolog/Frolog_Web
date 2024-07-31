import FeedItem from '@/features/Feed/components/FeedItem';
import React from 'react';

function ReviewsForBook() {
  return (
    <div className='flex w-full flex-col gap-[36px] py-[36px]'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
}

export default ReviewsForBook;
