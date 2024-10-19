'use client';

import React from 'react';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { AnimatePresence } from 'framer-motion';
import WellSelectSheet from './WellSelectSheet';
import StateSelectSheet from './StateSelectSheet';
import { useAddBookToWell } from '../../hooks/useAddBookToWell';

interface Props {
  bookId: string;
  closeSheet: () => void;
}

function AddBookToWell({ bookId, closeSheet }: Props) {
  const {
    step,
    setStep,
    userId,
    callback,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  } = useAddBookToWell(bookId);

  const handleClose = () => {
    setStep(null);
    setTimeout(() => {
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
            {userId && <WellSelectSheet userId={userId} callback={callback} />}
          </BottomSheet>
        )}
      </AnimatePresence>
    </>
  );
}

export default AddBookToWell;
