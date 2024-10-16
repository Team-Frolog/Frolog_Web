'use client';

import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useObserver } from '@/hooks/gesture/useObserver';
import MemoListItem from './MemoListItem';
import { useMemos } from '../../hooks/useMemos';
import { Memo } from '../../models/memo.model';

interface Props {
  bookId: string;
  userId: string;
}

function MemoList({ bookId, userId }: Props) {
  const {
    memoList,
    setMemoId,
    handleDeleteMemo,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetched,
  } = useMemos(bookId);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      {isFetched && isEmpty && (
        <EmptyContentFrog title='첫 메모를 남겨보세요!' />
      )}
      {isFetched && !isEmpty && (
        <>
          {memoList?.map((item: Memo) => (
            <MemoListItem
              key={item.id}
              memoData={item}
              onDelete={handleDeleteMemo}
              setMemoId={() => setMemoId(item.id)}
              userId={userId}
            />
          ))}
          <div ref={setTarget} id='observer' className='h-[10px]' />
        </>
      )}
    </div>
  );
}

export default MemoList;
