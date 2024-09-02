'use client';

import { useMemoImage } from '@/features/Memo/hooks/useMemoImage';
import React from 'react';
import ImageSlider from './ImageSlider';
import ImageSlot from './ImageSlot';

function ImageForm() {
  const { currentImgs, handleImgChange, handleDeleteImg } = useMemoImage();
  return (
    <ImageSlider>
      {[0, 1].map((index) => (
        <ImageSlot
          key={index}
          src={currentImgs[index]}
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
