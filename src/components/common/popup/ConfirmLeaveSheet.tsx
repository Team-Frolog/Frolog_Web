import { useAlertSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ON_LEAVE_ROUTE } from '@/constants/storage';
import { PAGES } from '@/constants/page';
import AlertBottomSheet from './AlertBottomSheet';

interface Props {
  bookId: string;
  extraButtonText: string;
  description: string;
}

function ConfirmLeaveSheet({ bookId, extraButtonText, description }: Props) {
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
          title={
            <>
              아직 작성중이에요
              <br />
              정말 나가시나요?
            </>
          }
          type='error'
          buttonText='나가기'
          extraButtonText={extraButtonText}
          stateType='isOpenAlertSheet'
          onClick={() =>
            backRoute() !== 'back'
              ? router.replace(`${PAGES.WELL_BOOK}/${bookId}/memo`)
              : router.back()
          }
        >
          <p className='text-body_lg'>{description}</p>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default ConfirmLeaveSheet;
