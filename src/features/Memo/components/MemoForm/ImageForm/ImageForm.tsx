'use client';

import React from 'react';
import ImageSlider from './ImageSlider';

function ImageForm() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <div className='flex w-full flex-col gap-[8px] px-page'>
        <span className='text-body_md text-gray-700'>사진 [선택]</span>
        <span className='text-body_lg text-gray-600'>
          인상깊은 구절을 찍어 기록하세요
        </span>
      </div>
      <ImageSlider />
    </div>
  );
}

export default ImageForm;
