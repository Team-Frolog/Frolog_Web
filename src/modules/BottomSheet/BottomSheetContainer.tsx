'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';
import BottomSheet from './BottomSheet';
import { BottomSheetProps } from '.';

interface Props {
  bottomSheet: BottomSheetProps | null;
}

/** 바텀시트를 렌더링하기 위한 wrapping 컨테이너 */
function BottomSheetContainer({ bottomSheet }: Props) {
  return (
    <div id='sheet-container'>
      <AnimatePresence>
        {bottomSheet && (
          <BottomSheet
            sheetKey={bottomSheet.sheetKey}
            onClick={bottomSheet.onClick}
            onClickSubButton={bottomSheet.onClickSubButton}
            titleProp={bottomSheet.titleProp}
          >
            {bottomSheet.children}
          </BottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BottomSheetContainer;
