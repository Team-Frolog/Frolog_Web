import { useAlertSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AlertSheet } from '@/data/ui/bottomSheet';
import AlertBottomSheet from '../../layouts/AlertBottomSheet';

interface Props {
  sheetData: AlertSheet;
}

function ConfirmLeaveSheet({ sheetData }: Props) {
  const router = useRouter();
  const isOpenAlertSheet = useAlertSheetState();

  return (
    <AnimatePresence>
      {isOpenAlertSheet && (
        <AlertBottomSheet sheetData={sheetData} onClick={() => router.back()}>
          {sheetData.description && (
            <p className='text-body-lg'>{sheetData.description()}</p>
          )}
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default ConfirmLeaveSheet;
