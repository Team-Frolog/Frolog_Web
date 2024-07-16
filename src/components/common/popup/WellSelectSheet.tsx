import { useWellSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { wellList } from '@/data/dummy/well';
import AlertBottomSheet from './AlertBottomSheet';
import Well from '../well/Well';

function WellSelectSheet() {
  const isOpenWellSheet = useWellSheetState();

  return (
    <AnimatePresence>
      {isOpenWellSheet && (
        <AlertBottomSheet
          title={
            <>
              이 책을 어떤 우물에
              <br />
              추가할까요?
            </>
          }
          type='normal'
          stateType='isOpenWellSheet'
        >
          <p className='text-body_lg'>
            선택한 우물에 책이 자동으로 추가됩니다!
          </p>
          <div className='grid max-h-[400px] w-full grid-cols-2 justify-center justify-items-center gap-[20px] overflow-y-auto py-[20px] pb-[40px] scrollbar-hide'>
            {wellList.map((well) => (
              <Well key={well.id} wellData={well} />
            ))}
          </div>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default WellSelectSheet;
