import AddButton from '@/components/Button/AddButton';
import { MemoList } from '@/features/Memo';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

function MemoPage({ params: { id } }: Props) {
  return (
    <>
      <div className='add-button-wrapper'>
        <AddButton route={`/new-memo?id=${id}`} text='메모 추가하기' />
      </div>
      <MemoList bookId={id} />
    </>
  );
}

export default MemoPage;
