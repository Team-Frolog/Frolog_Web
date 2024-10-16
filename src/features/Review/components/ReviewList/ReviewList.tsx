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
  const { reviews, setReviewId, deleteReview, isEmpty } = useReviews(bookId);

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      {isEmpty && (
        <EmptyContentFrog title='책을 다 읽으셨으면 이제 리뷰를 써보세요!' />
      )}
      {reviews.length === 1 && (
        <>
          <ReviewListItem
            key={reviews[0].id}
            index={1}
            reviewData={reviews[0]}
            onDelete={deleteReview}
            setReviewId={setReviewId}
            userId={userId}
          />
          {reviews[0].rating >= 3.5 && <FirstReviewItem />}
        </>
      )}
      {reviews.length > 1 &&
        reviews.map((review, i) => (
          <ReviewListItem
            key={review.id}
            index={i + 1}
            reviewData={review}
            onDelete={deleteReview}
            setReviewId={setReviewId}
            userId={userId}
          />
        ))}
    </div>
  );
}

export default ReviewList;
