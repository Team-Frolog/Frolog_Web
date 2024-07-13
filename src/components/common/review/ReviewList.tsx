import React from 'react';
import ReviewListItem from './ReviewListItem';

function ReviewList() {
  return (
    <div className='tap-content-layout tooltip-after relative gap-[12px] rounded-t-[20px] bg-green-200 py-[36px] after:-top-[10px] after:border-[16px] after:border-green-200'>
      <ReviewListItem />
    </div>
  );
}

export default ReviewList;
