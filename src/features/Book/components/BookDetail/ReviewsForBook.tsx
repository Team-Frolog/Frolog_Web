'use client';

import React from 'react';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useReviewForBook } from '@/features/Review/hooks/useReviewForBook';
import FeedItem from '@/features/Feed/components/FeedList/FeedItem';
import NoReviewForBook from './NoReviewForBook';

interface Props {
  bookId: string;
}

function ReviewsForBook({ bookId }: Props) {
  const {
    reviews,
    isEmpty,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReviewForBook(bookId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div className='flex w-full flex-col gap-[36px] py-[36px]'>
      {isEmpty && isFetched && <NoReviewForBook />}
      {reviews.map((review) => (
        <FeedItem key={review.id} feedData={review} isMemo={false} />
      ))}
      {!isFetchingNextPage && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default ReviewsForBook;
