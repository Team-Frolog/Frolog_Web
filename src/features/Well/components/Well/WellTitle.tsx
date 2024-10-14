'use client';

import React from 'react';
import { motion } from 'framer-motion';

function WellTitle() {
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
        className='flex flex-col gap-[20px] py-[50px]'
      >
        <h1 className='text-title-xl-bold'>소중한 나의 첫 우물</h1>
      </motion.div>
    </div>
  );
}

export default WellTitle;
