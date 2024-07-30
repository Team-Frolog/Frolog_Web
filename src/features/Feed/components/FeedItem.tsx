import React from 'react';
import FeedHeader from './FeedHeader';
import BookInfo from './BookInfo';

function FeedItem() {
  return (
    <div className='w-full'>
      <FeedHeader />
      <BookInfo />
    </div>
  );
}

export default FeedItem;
