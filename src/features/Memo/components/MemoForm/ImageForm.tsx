import { ImgPlusIcon } from 'public/icons';
import React from 'react';

function ImageForm() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <div className='flex w-full flex-col gap-[8px]'>
        <span className='text-body_md text-gray-700'>사진 [선택]</span>
        <span className='text-body_lg text-gray-600'>
          인상깊은 구절을 찍어 기록하세요
        </span>
      </div>
      <div className='flex w-fit gap-[20px]'>
        <div className='flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
          <ImgPlusIcon />
        </div>
        <div className='flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
          <ImgPlusIcon />
        </div>
      </div>
    </div>
  );
}

export default ImageForm;
