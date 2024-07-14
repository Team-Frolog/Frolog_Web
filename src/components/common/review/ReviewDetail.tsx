import React from 'react';
import { proTags } from '@/data/tag';
import RatingSelector from '../rating/RatingSelector';
import MajorTagList from '../tag/MajorTagList';

function ReviewDetail() {
  return (
    <div className='flex-child-layout gap-[36px]'>
      <RatingSelector type='default' rating={4.5} />
      <MajorTagList type='pros' tagData={proTags} />
      <MajorTagList type='cons' tagData={proTags} />
    </div>
  );
}

export default ReviewDetail;
