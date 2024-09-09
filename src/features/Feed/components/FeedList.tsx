'use client';

import React from 'react';
import FeedItem from './FeedItem';

function FeedList() {
  return (
    <div className='flex h-fit w-full flex-col gap-[36px]'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
}

export default FeedList;
