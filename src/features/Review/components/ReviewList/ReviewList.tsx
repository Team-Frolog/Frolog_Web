'use client';

import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { getPath } from '@/utils/getPath';
import AddButton from '@/components/Button/AddButton';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import { useReviews } from '../../hooks/useReviews';

interface Props {
  bookId: string;
  userId: string;
  wellId: string;
  isRootUser: boolean;
}

/** 리뷰 리스트 컴포넌트 */
function ReviewList({ bookId, wellId, userId, isRootUser }: Props) {
  const { reviews, setReviewId, deleteReview, isEmpty } = useReviews(
    bookId,
    userId
  );

  return (
    <>
      <WithConditionalRendering condition={isRootUser && isEmpty}>
        <div className='add-button-wrapper'>
          <AddButton
            route={getPath.newReview(userId, wellId, bookId)}
            text='리뷰 추가하기'
          />
        </div>
      </WithConditionalRendering>

      <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
        <WithConditionalRendering
          condition={!isEmpty}
          fallback={
            <EmptyContentFrog title='책을 다 읽으셨으면 이제 리뷰를 써보세요!' />
          }
        >
          <ReviewListItem
            key={reviews[0].id}
            reviewData={reviews[0]}
            onDelete={deleteReview}
            setReviewId={setReviewId}
            userId={userId}
          />
          <FirstReviewItem />
        </WithConditionalRendering>
      </div>
    </>
  );
}

export default ReviewList;
