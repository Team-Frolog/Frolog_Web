import React from 'react';
import RatingSelector from '../rating/RatingSelector';

function ReviewDetail() {
  return (
    <div className='flex-child-layout gap-[36px]'>
      <RatingSelector type='default' rating={4.5} />
      dd
    </div>
  );
}

export default ReviewDetail;
