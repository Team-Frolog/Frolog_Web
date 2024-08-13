import React from 'react';
import MemoTag from './MemoTag';

function MemoTagList() {
  return (
    <div className='flex w-full gap-[8px]'>
      <MemoTag type='phrase' />
      <MemoTag type='thought' />
      <MemoTag type='question' />
    </div>
  );
}

export default MemoTagList;
