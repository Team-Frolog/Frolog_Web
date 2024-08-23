import Image from 'next/image';
import React from 'react';
import { StoreIcon } from 'public/icons';
import { IMAGES } from '@/constants/images';

function WellListHeader() {
  return (
    <div className='relative flex w-full p-page pt-[45px]'>
      <Image
        src={IMAGES.side_header}
        alt='side header'
        width={390}
        height={144}
        className='absolute left-0 top-0 w-full'
      />
      <button type='button' className='absolute right-[24px] top-[24px]'>
        <StoreIcon />
      </button>
      <h1 className='text-h_md_bold'>우물</h1>
    </div>
  );
}

export default WellListHeader;
