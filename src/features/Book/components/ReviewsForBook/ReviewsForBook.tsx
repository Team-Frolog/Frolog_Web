'use client';

import React from 'react';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useUserId } from '@/store/sessionStore';
import { useReviewForBook } from '@/features/Review';
import NoReviewForBook from './NoReviewForBook';
import ReviewItem from './ReviewItem';
import NeedToLoginBlur from './NeedToLoginBlur';
import { useLikeReview } from '../../hooks/useLikeReview';
import { useBook } from '../../hooks/useBook';

interface Props {
  bookId: string;
}

function ReviewsForBook({ bookId }: Props) {
  const userId = useUserId();
  const {
    reviews,
    isEmpty,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReviewForBook(bookId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });
  const { bookData } = useBook(bookId);
  const { handleChangeLike } = useLikeReview(bookId);

  if (!bookData) return <></>;

  return (
    <div className='safe-bottom flex w-full flex-col gap-[36px] pt-[36px]'>
      {isEmpty && isFetched && <NoReviewForBook />}
      {!isEmpty && !userId && (
        <>
          <ReviewItem
            key={reviews[0].id}
            reviewData={reviews[0]}
            category={bookData?.category}
            onClickLike={() => {}}
          />
          <NeedToLoginBlur />
        </>
      )}
      {userId &&
        reviews.map((review) => (
          <ReviewItem
            key={review.id}
            reviewData={review}
            category={bookData?.category}
            onClickLike={() =>
              handleChangeLike({ id: review.id, value: !review.like })
            }
          />
        ))}
      {!isFetchingNextPage && userId && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default ReviewsForBook;
