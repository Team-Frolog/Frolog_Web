'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useReviewForBook } from '@/features/Review/hooks/useReviewForBook';
import NoReviewForBook from './NoReviewForBook';
import ReviewItem from './ReviewItem';
import { useBookDetail } from '../../hooks/useBookDetail';
import NeedToLoginBlur from './NeedToLoginBlur';

interface Props {
  bookId: string;
}

function ReviewsForBook({ bookId }: Props) {
  const { data: session } = useSession();
  const {
    reviews,
    isEmpty,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReviewForBook(bookId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });
  const { bookData } = useBookDetail(bookId);

  if (!bookData) return <></>;

  return (
    <div className='flex w-full flex-col gap-[36px] pt-[36px]'>
      {isEmpty && isFetched && <NoReviewForBook />}
      {!isEmpty && !session && (
        <>
          <ReviewItem
            key={reviews[0].id}
            reviewData={reviews[0]}
            category={bookData?.category}
          />
          <NeedToLoginBlur />
        </>
      )}
      {session &&
        reviews.map((review) => (
          <ReviewItem
            key={review.id}
            reviewData={review}
            category={bookData?.category}
          />
        ))}
      {!isFetchingNextPage && session && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default ReviewsForBook;
