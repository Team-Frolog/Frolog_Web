import React from 'react';
import { BookmarkIcon, ChatIcon, HeartIcon, SendIcon } from 'public/icons';

function FeedBar() {
  return (
    <div className='flex w-full items-center justify-between border border-b-gray-400 border-t-gray-400 px-page py-[12px]'>
      <div className='flex gap-[20px]'>
        <div className='flex items-center gap-[4px]'>
          <HeartIcon />
          <span className='text-body_md text-gray-600'>13</span>
        </div>
        <div className='flex items-center gap-[4px]'>
          <ChatIcon />
          <span className='text-body_md text-gray-600'>13</span>
        </div>
      </div>
      <div className='flex gap-[20px]'>
        <BookmarkIcon />
        <SendIcon />
      </div>
    </div>
  );
}

export default FeedBar;
