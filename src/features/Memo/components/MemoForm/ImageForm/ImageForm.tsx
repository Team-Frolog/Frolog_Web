'use client';

import { useMemoImage } from '@/features/Memo/hooks/useMemoImage';
import React from 'react';
import uniqueId from 'lodash/uniqueId';
import ImageSlider from './ImageSlider';
import ImageSlot from './ImageSlot';

function ImageForm() {
  const { currentImgs, handleImgChange, handleDeleteImg } = useMemoImage();

  const getImageSrc = (image: string) => {
    if (!image) return null;
    return image.startsWith('data:')
      ? image
      : `https://images.frolog.kr/memo/${image}.webp`;
  };

  return (
    <ImageSlider>
      {[0, 1].map((index) => (
        <ImageSlot
          key={uniqueId()}
          src={getImageSrc(currentImgs[index])}
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
