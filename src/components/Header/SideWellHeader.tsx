import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { StoreIcon } from 'public/icons';
import React from 'react';

function SideWellHeader() {
  return (
    <div>
      <Image
        src={IMAGES.side_header}
        alt='side header'
        width={390}
        height={144}
        className='absolute left-0 top-0 z-40 w-full'
      />
      <button type='button' className='absolute right-[24px] top-[24px] z-40'>
        <StoreIcon />
      </button>
    </div>
  );
}

export default SideWellHeader;
