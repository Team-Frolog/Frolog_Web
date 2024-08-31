import { WellAddIcon } from 'public/icons';
import React from 'react';

function WellAddButton() {
  return (
    <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
      <button type='button' className='h-[161px] w-[161px]'>
        <WellAddIcon className='h-full w-full' />
      </button>
      <span className='text-body-lg-bold'>새 우물 파기</span>
    </div>
  );
}

export default WellAddButton;
