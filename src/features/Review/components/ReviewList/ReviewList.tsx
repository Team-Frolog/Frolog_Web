'use client';

import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import { useReviews } from '../../hooks/useReviews';

interface Props {
  bookId: string;
  userId: string;
}

function ReviewList({ bookId, userId }: Props) {
  const { reviews, setReviewId, deleteReview, isEmpty, isFetched } =
    useReviews(bookId);

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      {isEmpty && isFetched && (
        <EmptyContentFrog title='책을 다 읽으셨으면 이제 리뷰를 써보세요!' />
      )}
      {!isEmpty && (
        <>
          <ReviewListItem
            key={reviews[0].id}
            reviewData={reviews[0]}
            onDelete={deleteReview}
            setReviewId={setReviewId}
            userId={userId}
          />
          <FirstReviewItem />
        </>
      )}
    </div>
  );
}

export default ReviewList;
