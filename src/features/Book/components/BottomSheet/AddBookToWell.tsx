'use client';

import React from 'react';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { AnimatePresence } from 'framer-motion';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import WellSelectSheet from './WellSelectSheet';
import StateSelectSheet from './StateSelectSheet';
import { useAddBookToWell } from '../../hooks/useAddBookToWell';

interface Props {
  bookId: string;
  closeSheet: () => void;
}

/** 우물에 책 추가 컴포넌트
 * - 순서에 따라 읽음/읽는 중 상태 바텀시트 or 우물 선택 바텀시트를 렌더링합니다.
 */
function AddBookToWell({ bookId, closeSheet }: Props) {
  const {
    step,
    setStep,
    userId,
    callback,
    isPending,
    setIsPending,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  } = useAddBookToWell(bookId);

  const handleClose = () => {
    setStep(null);
    setTimeout(() => {
      setIsPending(false);
      closeSheet();
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {step === 'state' && (
          <BottomSheet sheetKey='add_book' onClose={handleClose}>
            <StateSelectSheet
              reviewCount={reviewCount}
              handleAddReadBook={handleAddReadBook}
              handleAddReadingBook={handleAddReadingBook}
            />
          </BottomSheet>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {step === 'select-well' && (
          <BottomSheet sheetKey='select_well' onClose={handleClose}>
            {userId && (
              <WellSelectSheet
                userId={userId}
                callback={callback}
                isPending={isPending}
                startPending={() => setIsPending(true)}
              />
            )}
          </BottomSheet>
        )}
      </AnimatePresence>
      {isPending && <LoadingOverlay theme='dark' />}
    </>
  );
}

export default AddBookToWell;
