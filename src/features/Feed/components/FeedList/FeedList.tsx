'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { useObserver } from '@/features/Search/hooks/useObserver';
import FeedItem from './FeedItem';
import { useFeed } from '../../hooks/useFeed';

function FeedList() {
  const { feedData, fetchNextPage, hasNextPage, isFetching, isEmpty } =
    useFeed();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className='flex h-fit w-full flex-col justify-between gap-[36px]'>
      <div className='flex flex-col gap-[36px]'>
        {!isEmpty &&
          !isFetching &&
          feedData.map((feed) => (
            <FeedItem
              key={feed.memo ? feed.memo.id : feed.review?.id}
              isMemo={!!feed.memo}
              feedData={feed.memo ? feed.memo : feed.review!}
            />
          ))}
      </div>

      <div ref={setTarget} id='observer' className='h-[10px]' />
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
