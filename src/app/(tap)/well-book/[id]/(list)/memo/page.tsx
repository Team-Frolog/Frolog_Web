import AddButton from '@/components/Button/AddButton';
import { MemoList } from '@/features/Memo';

import React from 'react';

function MemoPage() {
  return (
    <>
      <div className='add-button-wrapper'>
        <AddButton route='/well-book/9791193154250/memo' text='메모 추가하기' />
      </div>
      <MemoList />
    </>
  );
}

export default MemoPage;
