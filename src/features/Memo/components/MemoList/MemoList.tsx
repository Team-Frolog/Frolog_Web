import React from 'react';
import MemoListItem from './MemoListItem';

function MemoList() {
  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      <MemoListItem />
    </div>
  );
}

export default MemoList;
