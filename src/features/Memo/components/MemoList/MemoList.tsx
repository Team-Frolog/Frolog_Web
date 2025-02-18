'use client';

import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useObserver } from '@/hooks/gesture/useObserver';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import MemoListSkeleton from '@/components/Fallback/Skeleton/MemoListSkeleton';
import MemoListItem from './MemoListItem';
import { useMemos } from '../../hooks/useMemos';
import { Memo } from '../../models/memo.model';

interface Props {
  /** 메모 대상이 되는 도서 id */
  bookId: string;
  /** 유저 id */
  userId: string;
}

/** 메모 리스트 컴포넌트 */
function MemoList({ bookId, userId }: Props) {
  const {
    memoList,
    setMemoId,
    handleDeleteMemo,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useMemos(bookId, userId);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<EmptyContentFrog title='첫 메모를 남겨보세요!' />}
      >
        {memoList?.map((item: Memo) => (
          <MemoListItem
            key={item.id}
            memoData={item}
            onDelete={handleDeleteMemo}
            setMemoId={() => setMemoId(item.id)}
            userId={userId}
          />
        ))}
        <Observer
          setTarget={setTarget}
          isFetching={isFetchingNextPage}
          fallback={<MemoListSkeleton />}
        />
      </WithConditionalRendering>
    </div>
  );
}

export default MemoList;
