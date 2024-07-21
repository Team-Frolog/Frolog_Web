'use client';

import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { FirstReviewItem, ReviewListItem } from '@/features/Review';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/components/PopUp/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import AddButton from '@/components/Button/AddButton';
import { useScroll } from '@/hooks/gesture/useScroll';

interface Props {
  params: {
    id: string;
  };
}

function ReviewPage({ params: { id } }: Props) {
  console.log(id);
  useScroll('#ffda4a');
  const isOpenDeleteSheet = useDeleteSheetState();

  const handleDeleteReview = () => {
    // TODO: 서버 연동
  };

  return (
    <>
      <AddButton route='/new-review?id=1' text='리뷰 추가하기' />
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
