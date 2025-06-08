import FrologItem from '@/components/FrologItem/FrologItem';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { toast } from '@/modules/Toast';
import React from 'react';

function NewFrogSheet() {
  return (
    <BottomSheet
      onClose={() => toast.normal('개구리를 선택해주세요')}
      sheetKey='get_new_frog'
    >
      <div className='flex gap-[9px]'>
        <FrologItem
          type='well'
          item={{
            key: 'default',
            type: 'frog',
            name: '개꾸리',
            price: 100,
            disabled: false,
            is_available: true,
            is_owned: false,
          }}
          hasAcquireButton
          onClick={() => {}}
        />
        <FrologItem
          type='well'
          item={{
            key: 'default',
            type: 'frog',
            name: '개꾸리',
            price: 100,
            disabled: false,
            is_available: true,
            is_owned: false,
          }}
          hasAcquireButton
          onClick={() => {}}
        />
        <FrologItem
          type='well'
          item={{
            key: 'default',
            type: 'frog',
            name: '개꾸리',
            price: 100,
            disabled: false,
            is_available: true,
            is_owned: false,
          }}
          hasAcquireButton
          onClick={() => {}}
        />
      </div>
    </BottomSheet>
  );
}

export default NewFrogSheet;
