import React from 'react';
import Dropdown from './Dropdown/Dropdown';

function CategoryResult() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <span className='text-body_lg'>
        “메리” 검색 결과 총 <strong className='text-body_lg_bold'>132</strong>권
      </span>
      <Dropdown />
    </div>
  );
}

export default CategoryResult;
