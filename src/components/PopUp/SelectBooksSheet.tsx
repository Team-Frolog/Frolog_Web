import { useSelectSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { sheetData } from '@/data/ui/bottomSheet';
import AlertBottomSheet from '../../layouts/AlertBottomSheet';
import Counter from '../Counter/Counter';

function SelectBooksSheet() {
  const isOpenSelectBooksSheet = useSelectSheetState();

  return (
    <AnimatePresence>
      {!isOpenSelectBooksSheet && (
        <AlertBottomSheet sheetData={sheetData.select_books}>
          <div className='flex flex-col gap-[32px]'>
            <p className='text-body-lg text-center'>
              {sheetData.select_books.description!(1)}
            </p>
            <Counter />
          </div>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default SelectBooksSheet;
