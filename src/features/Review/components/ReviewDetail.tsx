import React from 'react';
import { textareaType } from '@/data/ui/textareaType';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import MajorTagList from '@/components/Tag/MajorTagList';
import RatingSelector from '@/components/Rating/RatingSelector';
import { GetReviewRes } from '@frolog/frolog-api';

interface Props {
  reviewDetail: GetReviewRes | undefined;
}

/** 리뷰 상세 컴포넌트 */
function ReviewDetail({ reviewDetail }: Props) {
  if (!reviewDetail) return <></>;

  return (
    <div className='flex-child-layout gap-[36px]'>
      <div className='flex w-full flex-col gap-[36px] px-page'>
        <RatingSelector type='default' rating={reviewDetail.rating} />
        <MajorTagList type='pros' tagKeys={reviewDetail.tags_pos} />
        <MajorTagList type='cons' tagKeys={reviewDetail.tags_neg} />
      </div>

      <ReadOnlyTextarea
        type='bold'
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
