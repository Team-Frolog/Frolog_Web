import React from 'react';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import { textareaType } from '@/data/ui/textareaType';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { getImageSrc } from '@/utils/getImageSrc';
import { GetMemoRes } from '@frolog/frolog-api';
import ImageSlider from './MemoForm/ImageForm/ImageSlider';
import ImageSlot from './MemoForm/ImageForm/ImageSlot';

interface Props {
  /** 메모 데이터 객체 */
  memoData?: GetMemoRes;
}

/** 메모 상세 컴포넌트 */
function MemoDetail({ memoData }: Props) {
  if (!memoData) return null;

  return (
    <div className='flex w-full flex-col gap-[36px] bg-white'>
      <WithConditionalRendering condition={memoData.images.length !== 0}>
        <ImageSlider>
          {memoData.images.map((img, index) => (
            <ImageSlot
              key={index}
              src={getImageSrc(img, 'memo')}
              index={index}
            />
          ))}
        </ImageSlider>
      </WithConditionalRendering>

      <ReadOnlyTextarea
        option={textareaType.memo}
        content={memoData.content}
        type='default'
      />
    </div>
  );
}

export default MemoDetail;
