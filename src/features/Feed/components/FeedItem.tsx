import React from 'react';
import FeedHeader from './FeedHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';

function FeedItem() {
  return (
    <div className='w-full'>
      <FeedHeader />
      <div className='flex w-full flex-col gap-[20px]'>
        <BookInfo />
        <FeedContent />
      </div>
    </div>
  );
}

export default FeedItem;
