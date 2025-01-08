'use client';

import React from 'react';
import { getImageSrc } from '@/utils/getImageSrc';
import { useMemoImage } from '../../../hooks/useMemoImage';
import ImageSlider from './ImageSlider';
import ImageSlot from './ImageSlot';

/** 메모 이미지 등록 폼 */
function ImageForm() {
  const { currentImgs, handleImgChange, handleDeleteImg } = useMemoImage();

  return (
    <ImageSlider>
      {[0, 1].map((index) => (
        <ImageSlot
          key={index}
          src={getImageSrc(currentImgs[index], 'memo')}
          index={index}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleImgChange(e)
          }
          onDelete={() => handleDeleteImg(index)}
        />
      ))}
    </ImageSlider>
  );
}

export default ImageForm;
