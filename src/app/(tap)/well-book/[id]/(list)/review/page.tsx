'use client';

import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { FirstReviewItem, ReviewListItem } from '@/features/Review';
import { AnimatePresence } from 'framer-motion';
import { sheetData } from '@/data/ui/bottomSheet';
import AddButton from '@/components/Button/AddButton';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  console.log(id);
  const isOpenDeleteSheet = useDeleteSheetState();

  const handleDeleteReview = () => {
    // TODO: 서버 연동
  };

  return (
    <>
      <AddButton route='/new-review?id=9791193154250' text='리뷰 추가하기' />
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
    </>
  );
}

export default ReviewPage;
