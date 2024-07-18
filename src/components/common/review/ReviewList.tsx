import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import { sheetData } from '@/data/ui/bottomSheet';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import AlertBottomSheet from '../popup/AlertBottomSheet';

function ReviewList() {
  const isOpenDeleteSheet = useDeleteSheetState();

  const handleDeleteReview = () => {
    // TODO: 서버 연동
  };

  return (
    <div className='flex-child-layout tooltip-after relative gap-[12px] rounded-t-[20px] bg-green-200 py-[36px] after:-top-[10px] after:border-[16px] after:border-green-200'>
      <ReviewListItem />
      <FirstReviewItem />
      <AnimatePresence>
        {isOpenDeleteSheet && (
          <AlertBottomSheet
            sheetData={sheetData.delete_review}
            onClick={handleDeleteReview}
          >
            <p className='text-body_lg'>
              리뷰를 한 번 삭제하면 복구할 수 없어요.
            </p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
