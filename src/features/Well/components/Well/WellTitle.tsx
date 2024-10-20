'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/page';
import WellActionButton from './Pointing/WellActionButton';

interface Props {
  title: string;
  wellId?: string;
  wellHeight?: number;
  isPointing?: boolean;
  isRootUser?: boolean;
}

function WellTitle({
  title,
  wellId,
  wellHeight,
  isPointing = false,
  isRootUser = false,
}: Props) {
  return (
    <div className='flex-col-center relative flex w-full shrink-0'>
      <div className='pointer-events-none absolute left-0 top-0 flex w-full justify-between'>
        <div className='well-header-left' />
        <div className='well-header-right' />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center gap-[20px] py-[50px]'
      >
        <h1 className='text-title-xl-bold'>{title}</h1>
        {isRootUser && (
          <WellActionButton
            btnName='책 추가하기'
            wellId={wellId}
            href={PAGES.SEARCH}
            isPointing={isPointing}
            wellHeight={wellHeight}
          />
        )}
      </motion.div>
    </div>
  );
}

export default WellTitle;
