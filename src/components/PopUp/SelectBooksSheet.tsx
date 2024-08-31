import { useSelectSheetState } from '@/store/popUpStore';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { useStackMotionActions } from '@/store/stackMotionStore';
import React from 'react';
import { sheetData } from '@/data/ui/bottomSheet';
import AlertBottomSheet from '../../layouts/AlertBottomSheet';
import Counter from '../Counter/Counter';

function SelectBooksSheet() {
  const router = useRouter();
  const isOpenSelectBooksSheet = useSelectSheetState();
  const { setNewReviewId } = useStackMotionActions();

  const handleAddBooks = () => {
    setNewReviewId('test');
    router.push('/');
  };

  return (
    <AnimatePresence>
      {isOpenSelectBooksSheet && (
        <AlertBottomSheet
          sheetData={sheetData.select_books}
          onClick={handleAddBooks}
          onClickSubButton={() =>
            router.push(`${PAGES.NEW_REVIEW}?id=9791193154250`)
          }
        >
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
