'use client';

import { ArrowIcon, PlusIcon } from 'public/icons';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/page';
import React from 'react';
import { useRouter } from 'next/navigation';
import useAddBookStore from '@/store/addBookStore';
import Pointing from './Pointing';

interface Props {
  type?: 'arrow' | 'plus';
  wellId?: string;
  href?: string;
  isPointing?: boolean;
  btnName: string;
  itemCount?: number;
}

function WellActionButton({
  btnName,
  wellId,
  itemCount,
  type = 'plus',
  href = PAGES.SEARCH,
  isPointing = false,
}: Props) {
  const router = useRouter();
  const { setWellId } = useAddBookStore((state) => state.actions);

  return (
    <div className='flex flex-col items-center gap-[6px]'>
      <div className='relative h-[28px] w-[28px]'>
        <motion.button
          whileTap={{ scale: 1.1 }}
          type='button'
          onClick={() => {
            if (wellId) {
              setWellId(wellId);
            }
            router.push(href);
          }}
          className='absolute inset-x-0 top-0 z-50 mx-auto cursor-pointer'
        >
          {type === 'plus' ? (
            <PlusIcon />
          ) : (
            <ArrowIcon fill='#313239' width={28} height={28} />
          )}
        </motion.button>
        {isPointing && <Pointing />}
      </div>
      <h3 className='mt-[2px] text-body-xl-bold'>{btnName}</h3>
      {itemCount !== undefined && (
        <span className='text-body-md text-gray-600'>
          현재 높이 {itemCount}권
        </span>
      )}
    </div>
  );
}

export default WellActionButton;
