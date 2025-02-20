'use client';

import React from 'react';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
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

/** 도서 상세 > 리뷰 모음 리스트 컴포넌트
 * - 무한 스크롤이 적용되어 있습니다.
 */
function ReviewsForBook({ bookId }: Props) {
  const userId = useUserId();
  const {
    reviews,
    isFetched,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useReviewForBook(bookId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });
  const { bookData } = useBook(bookId);
  const { handleChangeLike } = useLikeReview(bookId);
  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'book',
  });

  if (!bookData) return null;

  return (
    <div className='safe-bottom flex w-full flex-col gap-[36px] pt-[36px]'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<NoReviewForBook />}
      >
        {userId ? (
          reviews.map((review) => (
            <ReviewItem
              key={review.id}
              reviewData={review}
              category={bookData?.category}
              onSaveScroll={saveScroll}
              onClickLike={() =>
                handleChangeLike({ id: review.id, value: !review.like })
              }
            />
          ))
        ) : (
          <>
            <ReviewItem
              key={reviews[0].id}
              reviewData={reviews[0]}
              category={bookData?.category}
              onSaveScroll={saveScroll}
              onClickLike={() => {}}
            />
            <NeedToLoginBlur />
          </>
        )}
      </WithConditionalRendering>
      <Observer
        isFetching={isFetchingNextPage || !userId}
        setTarget={setTarget}
      />
    </div>
  );
}

export default ReviewsForBook;
