import EmptyContentFrog from '@/components/EmptyContentFrog';
import React from 'react';

function MemoList() {
  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      <EmptyContentFrog title='첫 메모를 남겨보세요!' />
    </div>
  );
}

export default MemoList;
