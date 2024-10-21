'use client';

import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import AddButton from '@/components/Button/AddButton';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import { useReviews } from '../../hooks/useReviews';

interface Props {
  bookId: string;
  userId: string;
  isRootUser: boolean;
}

function ReviewList({ bookId, userId, isRootUser }: Props) {
  const { reviews, setReviewId, deleteReview, isEmpty, isFetched } = useReviews(
    bookId,
    userId
  );

  return (
    <>
      {isRootUser && isEmpty && (
        <div className='add-button-wrapper'>
          <AddButton route={`/new-review?id=${bookId}`} text='리뷰 추가하기' />
        </div>
      )}
      <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
        {isEmpty && isFetched && (
          <EmptyContentFrog title='책을 다 읽으셨으면 이제 리뷰를 써보세요!' />
        )}
        {!isEmpty && isFetched && (
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
    </>
  );
}

export default ReviewList;
