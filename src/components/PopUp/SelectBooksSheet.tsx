import { useSelectSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { sheetData } from '@/data/ui/bottomSheet';
import AlertBottomSheet from '../../layouts/AlertBottomSheet';

function SelectBooksSheet() {
  const isOpenSelectBooksSheet = useSelectSheetState();

  return (
    <AnimatePresence>
      {!isOpenSelectBooksSheet && (
        <AlertBottomSheet sheetData={sheetData.select_books}>
          <p className='text-body-lg text-center'>
            {sheetData.select_books.description!(1)}
          </p>
          <div className='flex w-full flex-col'>ss</div>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default SelectBooksSheet;
