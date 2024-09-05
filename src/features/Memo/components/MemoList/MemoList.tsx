'use client';

import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import EmptyContentFrog from '@/components/ListItem/EmptyContentFrog';
import { sheetData } from '@/data/ui/bottomSheet';
import MemoListItem from './MemoListItem';
import { useMemos } from '../../hooks/useMemos';
import { Memo } from '../../models/memo.model';

interface Props {
  bookId: string;
}

function MemoList({ bookId }: Props) {
  const { memoList, setMemoId, handleDeleteMemo } = useMemos(bookId);
  const isOpenDeleteSheet = useDeleteSheetState();

  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      {memoList?.length === 0 ? (
        <EmptyContentFrog title='첫 메모를 남겨보세요!' />
      ) : (
        memoList?.map((item: Memo) => (
          <MemoListItem
            key={item.id}
            memoData={item}
            setMemoId={() => setMemoId(item.id)}
          />
        ))
      )}
      <AnimatePresence>
        {isOpenDeleteSheet && (
          <AlertBottomSheet
            sheetData={sheetData.delete_memo}
            onClick={handleDeleteMemo}
          >
            <p className='text-body-lg'>
              메모를 한 번 삭제하면 복구할 수 없어요.
            </p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MemoList;
