import React from 'react';
import { ArrowIcon, ChatIcon, HeartIcon } from 'public/icons';
import Link from 'next/link';

function FeedBar() {
  return (
    <div className='flex w-full items-center justify-between rounded-b-[20px] border-t border-t-gray-400 bg-white px-page py-[12px]'>
      <div className='flex gap-[20px]'>
        <div className='flex items-center gap-[4px]'>
          <HeartIcon />
          <span className='text-body-md text-gray-600'>13</span>
        </div>
        <div className='flex items-center gap-[4px]'>
          <ChatIcon />
          <span className='text-body-md text-gray-600'>13</span>
        </div>
      </div>
      <Link
        href='/book/9791193154250'
        className='flex items-center gap-[4px] text-body-md text-gray-600'
      >
        우물에 담기 <ArrowIcon fill='#727384' width={24} height={24} />
      </Link>
    </div>
  );
}

export default FeedBar;
