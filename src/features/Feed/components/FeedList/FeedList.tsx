'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import FeedListSkeleton from '@/components/Fallback/Skeleton/FeedListSkeleton';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import FeedItem from './FeedItem';
import { useFeed } from '../../hooks/feed/useFeed';

/** 피드 리스트 컴포넌트
 * - 무한 스크롤, 스크롤 위치 저장 기능이 적용되어 있습니다.
 */
function FeedList() {
  const {
    feedData,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isEmpty,
    isFetchingNextPage,
    isCommentLoading,
    setIsCommentLoading,
  } = useFeed();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });
  const { saveScroll } = useScrollPosition(isFetched);

  return (
    <div className='flex h-fit w-full flex-col justify-between gap-[36px]'>
      {!isEmpty && (
        <div className='flex-column gap-[36px]'>
          {feedData.map((feed) => (
            <FeedItem
              key={feed.memo ? feed.memo.id : feed.review?.id}
              isMemo={!!feed.memo}
              feedData={feed.memo ? feed.memo : feed.review!}
              startCommentLoading={() => setIsCommentLoading(true)}
              onSaveScroll={saveScroll}
            />
          ))}
        </div>
      )}

      {isFetchingNextPage ? (
        <FeedListSkeleton />
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
      {isCommentLoading && <LoadingOverlay theme='dark' />}
    </div>
  );
}

export default FeedList;
