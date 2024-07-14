import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';

function TitleHeader() {
  return (
    <div className='flex w-full justify-between border-b-[0.5px] border-gray-400 bg-white px-[24px] py-[10px] text-gray-800'>
      <button type='button'>
        <BackIcon fill='#727484' />
      </button>
      <h2 className='text-body_xl_bold'>메리와 메리</h2>
      <button type='button' className='text-body_lg_bold text-main'>
        저장
      </button>
    </div>
  );
}

export default TitleHeader;
