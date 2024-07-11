'use client';

import React from 'react';
import FrogOnBook from '@/components/wellPage/FrogOnBook';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { motion } from 'framer-motion';
import WellBook from './WellBook';

function WellBookList() {
  const hasNewReview = useNewReviewId();
  return (
    <motion.div
      className='flex w-full flex-col-reverse items-center'
      initial='hidden'
      animate='visible'
      variants={staggerContainerVariants}
    >
      {hasNewReview && <WellBook />}
      <FrogOnBook />
    </motion.div>
  );
}

export default WellBookList;
