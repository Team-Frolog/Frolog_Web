import { useWellSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { wellList } from '@/data/dummy/well';
import { sheetData } from '@/data/ui/bottomSheet';
import AlertBottomSheet from './AlertBottomSheet';
import Well from '../well/Well';

function WellSelectSheet() {
  const isOpenWellSheet = useWellSheetState();

  return (
    <AnimatePresence>
      {isOpenWellSheet && (
        <AlertBottomSheet sheetData={sheetData.add_another_to_well}>
          <p className='text-body_lg'>
            {sheetData.add_another_to_well.description}
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
