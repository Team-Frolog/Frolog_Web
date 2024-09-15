'use client';

import React from 'react';
import EmptyContentFrog from '@/components/ListItem/EmptyContentFrog';
import MemoListItem from './MemoListItem';
import { useMemos } from '../../hooks/useMemos';
import { Memo } from '../../models/memo.model';

interface Props {
  bookId: string;
}

function MemoList({ bookId }: Props) {
  const { memoList, setMemoId, handleDeleteMemo } = useMemos(bookId);

  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      {memoList?.length === 0 ? (
        <EmptyContentFrog title='첫 메모를 남겨보세요!' />
      ) : (
        memoList?.map((item: Memo) => (
          <MemoListItem
            key={item.id}
            memoData={item}
            onDelete={handleDeleteMemo}
            setMemoId={() => setMemoId(item.id)}
          />
        ))
      )}
    </div>
  );
}

export default MemoList;
