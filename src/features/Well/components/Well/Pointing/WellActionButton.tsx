import Link from 'next/link';
import { ArrowIcon, PlusIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import React from 'react';
import Pointing from './Pointing';

interface Props {
  type?: 'arrow' | 'plus';
  href?: string;
  isPointing?: boolean;
  btnName: string;
  wellHeight?: number;
}

function WellActionButton({
  btnName,
  wellHeight,
  type = 'plus',
  href = PAGES.SEARCH,
  isPointing = false,
}: Props) {
  return (
    <div className='flex flex-col items-center gap-[6px]'>
      <div className='relative h-[28px] w-[28px]'>
        <Link
          href={href}
          className='absolute inset-x-0 top-[50%] z-50 mx-auto -translate-y-1/2 cursor-pointer'
        >
          {type === 'plus' ? (
            <PlusIcon />
          ) : (
            <ArrowIcon fill='#313239' width={28} height={28} />
          )}
        </Link>
        {isPointing && <Pointing />}
      </div>
      <h3 className='mt-[2px] text-body-xl-bold'>{btnName}</h3>
      {wellHeight !== undefined && (
        <span className='text-body-md text-gray-600'>
          현재 높이 {wellHeight}cm
        </span>
      )}
    </div>
  );
}

export default WellActionButton;
