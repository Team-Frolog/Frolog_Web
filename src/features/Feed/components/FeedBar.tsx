import Image from 'next/image';
import React from 'react';
import { ICONS } from '@/constants/icons';

function FeedBar() {
  return (
    <div className='flex w-full items-center justify-between border border-b-gray-400 border-t-gray-400 px-page py-[12px]'>
      <div className='flex gap-[20px]'>
        <div className='flex items-center gap-[4px]'>
          <Image src={ICONS.feed.heart} alt='heart' width={24} height={24} />
          <span className='text-body_md text-gray-600'>13</span>
        </div>
        <div className='flex items-center gap-[4px]'>
          <Image src={ICONS.feed.chat} alt='chat' width={24} height={24} />
          <span className='text-body_md text-gray-600'>13</span>
        </div>
      </div>
      <div className='flex gap-[20px]'>
        <Image
          src={ICONS.feed.bookmark}
          alt='bookmark'
          width={24}
          height={24}
        />
        <Image src={ICONS.feed.send} alt='send' width={24} height={24} />
      </div>
    </div>
  );
}

export default FeedBar;
