'use client';

import React from 'react';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { AnimatePresence } from 'framer-motion';
import WellSelectSheet from './WellSelectSheet';
import StateSelectSheet from './StateSelectSheet';
import { useAddBookToWell } from '../../hooks/useAddBookToWell';

interface Props {
  bookId: string;
}

function AddBookToWell({ bookId }: Props) {
  const {
    step,
    userId,
    callback,
    reviewCount,
    handleAddReadBook,
    handleAddReadingBook,
  } = useAddBookToWell(bookId);

  return (
    <>
      <AnimatePresence>
        {step === 'state' && (
          <BottomSheet sheetKey='add_book'>
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
          <BottomSheet sheetKey='select_well'>
            {userId && <WellSelectSheet userId={userId} callback={callback} />}
          </BottomSheet>
        )}
      </AnimatePresence>
    </>
  );
}

export default AddBookToWell;
