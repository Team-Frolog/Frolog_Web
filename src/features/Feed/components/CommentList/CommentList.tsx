'use client';

import React from 'react';
import { useAlertSheetState } from '@/store/popUpStore';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { AnimatePresence } from 'framer-motion';
import { useReport } from '@/hooks/useReport';
import CommentItem from './CommentItem';

function CommentList() {
  const isOpenAlertSheet = useAlertSheetState();
  const { handleReport } = useReport();

  return (
    <div className='flex w-full flex-col gap-[36px] py-[16px]'>
      <CommentItem />
      <CommentItem isChild />
      <AnimatePresence>
        {isOpenAlertSheet && (
          <AlertBottomSheet
            sheetData={sheetData.report_this_comment}
            onClick={handleReport}
          >
            <p>{sheetData.report_this_comment.description!()}</p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CommentList;
