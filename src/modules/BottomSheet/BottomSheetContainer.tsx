'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import BottomSheet from './BottomSheet';
import { BottomSheetProps } from '.';

interface Props {
  bottomSheet: BottomSheetProps | null;
}

function BottomSheetContainer({ bottomSheet }: Props) {
  return (
    <div id='sheet-container'>
      <AnimatePresence>
        {bottomSheet && (
          <BottomSheet
            sheetKey={bottomSheet.sheetKey}
            onClick={bottomSheet.onClick}
            onClickSubButton={bottomSheet.onClickSubButton}
          >
            {bottomSheet.children}
          </BottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BottomSheetContainer;
