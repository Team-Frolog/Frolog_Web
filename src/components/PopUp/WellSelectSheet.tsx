import { useWellSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { sheetData } from '@/data/ui/bottomSheet';
// import { Well } from '@/features/Well';
import AlertBottomSheet from '../../layouts/AlertBottomSheet';

function WellSelectSheet() {
  const isOpenWellSheet = useWellSheetState();
  // const { changePopUpState } = usePopUpActions();

  // const handleSelectWell = () => {
  //   changePopUpState('isOpenWellSheet', false);
  //   changePopUpState('isOpenSelectBooksSheet', true);
  // };

  return (
    <AnimatePresence>
      {isOpenWellSheet && (
        <AlertBottomSheet sheetData={sheetData.add_another_to_well}>
          <p className='text-body-lg'>
            {sheetData.add_another_to_well.description!()}
          </p>
          <div className='grid max-h-[400px] w-full grid-cols-2 justify-center justify-items-center gap-[20px] overflow-y-auto py-[20px] pb-[40px] scrollbar-hide'>
            {/* {wellList.map((well) => (
              <Well
                type='select'
                key={well.id}
                wellData={well}
                onClick={handleSelectWell}
              />
            ))} */}
          </div>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default WellSelectSheet;
