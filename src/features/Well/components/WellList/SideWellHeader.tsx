'use client';

import SideHeader from '@/components/Header/SideHeader';
import { usePopUpActions } from '@/store/popUpStore';
import { StoreIcon } from 'public/icons';
import React from 'react';

function SideWellHeader() {
  const { changePopUpState } = usePopUpActions();

  return (
    <SideHeader title='우물'>
      <button
        type='button'
        onClick={() => changePopUpState('isOpenAlertSheet', true)}
        className='absolute right-[24px] top-[24px] z-70'
      >
        <StoreIcon />
      </button>
    </SideHeader>
  );
}

export default SideWellHeader;
