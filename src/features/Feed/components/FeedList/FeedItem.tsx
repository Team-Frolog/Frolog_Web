import React from 'react';
import FeedHeader from './FeedHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';
import FeedBar from './FeedBar';

function FeedItem() {
  return (
    <div className='w-full'>
      <FeedHeader hasFollow />
      <div className='flex w-full flex-col'>
        <BookInfo />
        <FeedContent />
        <FeedBar />
      </div>
    </div>
  );
}

export default FeedItem;
