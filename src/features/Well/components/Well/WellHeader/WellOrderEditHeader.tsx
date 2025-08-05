'use client';

import React from 'react';

interface Props {
  onClickDone: () => void;
  onClickCancel: () => void;
}

function WellOrderEditHeader({ onClickDone, onClickCancel }: Props) {
  return (
    <div className='safe-header absolute left-[50%] z-20 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      <button
        type='button'
        onClick={onClickCancel}
        className='absolute left-[28px] top-[28px] z-20 text-body-lg-bold text-error'
      >
        취소
      </button>
      <button
        type='button'
        onClick={onClickDone}
        className='absolute right-[28px] top-[28px] z-20 text-body-lg-bold text-main'
      >
        완료
      </button>
    </div>
  );
}

export default WellOrderEditHeader;
