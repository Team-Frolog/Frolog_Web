import React from 'react';
import uniqueId from 'lodash/uniqueId';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import { textareaType } from '@/data/ui/textareaType';
import { GetMemoRes } from '@frolog/frolog-api';
import ImageSlider from './MemoForm/ImageForm/ImageSlider';
import ImageSlot from './MemoForm/ImageForm/ImageSlot';

interface Props {
  memoData: GetMemoRes | undefined;
}

function MemoDetail({ memoData }: Props) {
  if (!memoData) return <></>;

  return (
    <div className='flex w-full flex-col gap-[36px] bg-white'>
      {memoData.images.length !== 0 && (
        <ImageSlider>
          {memoData.images.map((img, index) => (
            <ImageSlot
              key={uniqueId()}
              src={`https://images.frolog.kr/memo/${img}.webp`}
              index={index}
            />
          ))}
        </ImageSlider>
      )}
      <ReadOnlyTextarea
        option={textareaType.memo}
        content={memoData.content}
        type='default'
      />
    </div>
  );
}

export default MemoDetail;
