import { useAlertSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ON_LEAVE_ROUTE } from '@/constants/storage';
import { PAGES } from '@/constants/page';
import AlertBottomSheet from './AlertBottomSheet';

function ConfirmLeaveSheet({ bookId }: { bookId: string }) {
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
          extraButtonText='계속 작성하기'
          onClick={() =>
            backRoute() === 'back'
              ? router.back()
              : router.replace(`${PAGES.WELL_BOOK}/${bookId}/memo`)
          }
        >
          <p className='text-body_lg'>이대로 나가면 내용이 저장되지 않아요</p>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default ConfirmLeaveSheet;
