'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import FeedListSkeleton from '@/components/Fallback/Skeleton/FeedListSkeleton';
import { useObserver } from '@/hooks/gesture/useObserver';
import { STORAGE_KEY } from '@/constants/storage';
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
    isLoading,
    isFetchingNextPage,
    isCommentLoading,
    setIsCommentLoading,
  } = useFeed();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    const getStorage = sessionStorage.getItem(STORAGE_KEY.SCROLL_INFO);
    if (!getStorage || !isFetched) {
      return;
    }

    const main = window.document.getElementById('main');

    main?.scrollTo({
      top: JSON.parse(getStorage).anchorPosition,
    });

    sessionStorage.removeItem(STORAGE_KEY.SCROLL_INFO);
  }, [isFetched]);

  const saveScroll = () => {
    const main = window.document.getElementById('main');

    sessionStorage.setItem(
      STORAGE_KEY.SCROLL_INFO,
      JSON.stringify({
        anchorPosition: main?.scrollTop,
      })
    );
  };

  if (isLoading) {
    return (
      <div className='flex h-fit w-full flex-col gap-[36px]'>
        <FeedListSkeleton />
      </div>
    );
  }

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
              onSaveScroll={() => saveScroll()}
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
