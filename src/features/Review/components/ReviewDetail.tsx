import React from 'react';
import { textareaType } from '@/data/ui/textareaType';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import MajorTagList from '@/components/Tag/MajorTagList';
import RatingSelector from '@/components/Rating/RatingSelector';
import { GetReviewDetailRes } from '@frolog/frolog-api';

interface Props {
  reviewDetail: GetReviewDetailRes | undefined;
}

function ReviewDetail({ reviewDetail }: Props) {
  if (!reviewDetail) return null;

  return (
    <div className='flex-child-layout gap-[36px]'>
      <RatingSelector type='default' rating={reviewDetail.rating} />
      <MajorTagList type='pros' tagData={reviewDetail.tags_pos} />
      <MajorTagList type='cons' tagData={reviewDetail.tags_neg} />
      <ReadOnlyTextarea
        option={textareaType.oneLiner}
        content={reviewDetail.title}
      />
      <ReadOnlyTextarea
        option={textareaType.review}
        content={reviewDetail.content}
      />
    </div>
  );
}

export default ReviewDetail;
