'use client';

import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import MemoListItem from './MemoListItem';

function MemoList() {
  const isOpenDeleteSheet = useDeleteSheetState();

  const handleDeleteMemo = () => {
    // TODO: 서버 연동
  };

  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      <MemoListItem />
      <AnimatePresence>
        {isOpenDeleteSheet && (
          <AlertBottomSheet
            sheetData={sheetData.delete_memo}
            onClick={handleDeleteMemo}
          >
            <p className='text-body-lg'>
              리뷰를 한 번 삭제하면 복구할 수 없어요.
            </p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MemoList;
