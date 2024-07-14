import React from 'react';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';

function ReviewList() {
  return (
    <div className='flex-child-layout tooltip-after relative gap-[12px] rounded-t-[20px] bg-green-200 py-[36px] after:-top-[10px] after:border-[16px] after:border-green-200'>
      <ReviewListItem />
      <FirstReviewItem />
    </div>
  );
}

export default ReviewList;
