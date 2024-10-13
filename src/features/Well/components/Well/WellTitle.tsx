'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';

function WellTitle() {
  return (
    <div className='flex-col-center relative flex w-full shrink-0'>
      <Image
        src={IMAGES.well.header}
        alt='well-header'
        width={390}
        height={144}
        loading='eager'
        className='absolute left-0 top-0 w-full'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-[20px] py-[50px]'
      >
        <h1 className='text-title-xl-bold'>소중한 나의 첫 우물</h1>
      </motion.div>
    </div>
  );
}

export default WellTitle;
