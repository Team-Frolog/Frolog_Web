import { useAlertSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ON_LEAVE_ROUTE } from '@/constants/storage';
import { PAGES } from '@/constants/page';
import { AlertSheet } from '@/data/ui/bottomSheet';
import AlertBottomSheet from './AlertBottomSheet';

interface Props {
  bookId: string;
  sheetData: AlertSheet;
}

function ConfirmLeaveSheet({ bookId, sheetData }: Props) {
  const router = useRouter();
  const isOpenAlertSheet = useAlertSheetState();
  const backRoute = () => {
    return typeof window !== undefined
      ? sessionStorage.getItem(ON_LEAVE_ROUTE)
      : undefined;
  };

  return (
    <AnimatePresence>
      {isOpenAlertSheet && (
        <AlertBottomSheet
          sheetData={sheetData}
          onClick={() =>
            backRoute() !== 'back'
              ? router.replace(`${PAGES.WELL_BOOK}/${bookId}/memo`)
              : router.back()
          }
        >
          <p className='text-body_lg'>{sheetData.description}</p>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default ConfirmLeaveSheet;
