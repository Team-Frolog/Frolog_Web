'use client';

import { IMAGES } from '@/constants/images';
import { usePopUpActions } from '@/store/popUpStore';
import Image from 'next/image';
import { StoreIcon } from 'public/icons';
import React from 'react';

function SideWellHeader() {
  const { changePopUpState } = usePopUpActions();

  return (
    <div>
      <Image
        src={IMAGES.side_header}
        alt='side header'
        width={390}
        height={144}
        className='z-60 absolute left-0 top-0 w-full'
      />
      <button
        type='button'
        onClick={() => changePopUpState('isOpenAlertSheet', true)}
        className='z-70 absolute right-[24px] top-[24px]'
      >
        <StoreIcon />
      </button>
    </div>
  );
}

export default SideWellHeader;
