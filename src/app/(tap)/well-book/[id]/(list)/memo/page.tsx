import AddButton from '@/components/Button/AddButton';
import React from 'react';

function MemoPage() {
  return (
    <>
      <AddButton route='/well-book/9791193154250/memo' text='메모 추가하기' />
      <span>memo</span>
    </>
  );
}

export default MemoPage;
