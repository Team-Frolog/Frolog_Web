import React from 'react';
import { textareaType } from '@/data/ui/textareaType';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import MajorTagList from '@/components/Tag/MajorTagList';
import RatingSelector from '@/components/Rating/RatingSelector';
import { useFormContext } from 'react-hook-form';

function ReviewDetail() {
  const { watch } = useFormContext();
  return (
    <div className='flex-child-layout gap-[36px]'>
      <RatingSelector type='default' rating={watch('rating')} />
      <MajorTagList type='pros' tagData={watch('pros')} />
      <MajorTagList type='cons' tagData={watch('cons')} />
      <ReadOnlyTextarea
        option={textareaType.oneLiner}
        content={watch('oneLiner')}
      />
      <ReadOnlyTextarea
        option={textareaType.review}
        content={watch('review')}
      />
    </div>
  );
}

export default ReviewDetail;
