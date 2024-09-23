import { MenuArrowIcon } from 'public/icons';
import React from 'react';

function FrologTestButton() {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <h6 className='mb-[4px] text-body-md text-gray-700'>독서성향</h6>
      <button
        type='button'
        className='input-common input-light box-border flex w-full items-center justify-between'
      >
        <span className='text-body-lg-bold text-gray-800'>감정형</span>
        <div className='flex items-center gap-[4px]'>
          <span className='text-body-lg text-gray-700'>다시 진단하기</span>
          <MenuArrowIcon />
        </div>
      </button>
    </div>
  );
}

export default FrologTestButton;
