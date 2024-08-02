// import FeedItem from '@/features/Feed/components/FeedItem';
import React from 'react';
import NoReviewForBook from './NoReviewForBook';

function ReviewsForBook() {
  return (
    <div className='flex w-full flex-col gap-[36px] py-[36px]'>
      {/* <FeedItem />
      <FeedItem />
      <FeedItem /> */}
      <NoReviewForBook />
    </div>
  );
}

export default ReviewsForBook;
