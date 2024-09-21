'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import FeedItem from './FeedItem';

function FeedList() {
  return (
    <div className='flex h-fit w-full flex-col gap-[36px]'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <Image
        src={IMAGES.frog.more_feed}
        alt='more feed'
        width={254}
        height={172}
        className='mx-auto'
      />
    </div>
  );
}

export default FeedList;
