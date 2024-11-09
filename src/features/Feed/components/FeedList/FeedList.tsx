'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import FeedSkeleton from '@/components/Fallback/Skeleton/FeedSkeleton';
import { useObserver } from '@/hooks/gesture/useObserver';
import FeedItem from './FeedItem';
import { useFeed } from '../../hooks/feed/useFeed';

function FeedList() {
  const {
    feedData,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isLoading,
    isFetchingNextPage,
  } = useFeed();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) {
    return (
      <div className='flex h-fit w-full flex-col gap-[36px]'>
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
      </div>
    );
  }

  return (
    <div className='flex h-fit w-full flex-col justify-between gap-[36px]'>
      {!isEmpty && (
        <div className='flex flex-col gap-[36px]'>
          {feedData.map((feed) => (
            <FeedItem
              key={feed.memo ? feed.memo.id : feed.review?.id}
              isMemo={!!feed.memo}
              feedData={feed.memo ? feed.memo : feed.review!}
            />
          ))}
        </div>
      )}

      {isFetchingNextPage ? (
        <>
          <FeedSkeleton />
          <FeedSkeleton />
          <FeedSkeleton />
        </>
      ) : (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
      {feedData && isFetched && (
        <Image
          src={IMAGES.frog.more_feed}
          alt='more feed'
          width={254}
          height={172}
          className='mx-auto'
        />
      )}
    </div>
  );
}

export default FeedList;
