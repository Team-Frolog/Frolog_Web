import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { toast } from '@/modules/Toast';
import React from 'react';

function NewFrogSheet() {
  return (
    <BottomSheet
      onClose={() => toast.normal('개구리를 선택해주세요')}
      sheetKey='get_new_frog'
    >
      NewFrogSheet
    </BottomSheet>
  );
}

export default NewFrogSheet;
