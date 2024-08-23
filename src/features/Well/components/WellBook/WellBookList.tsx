'use client';

import React from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { motion } from 'framer-motion';
import WellBook from './WellBook';
import FrogOnBook from '../FrogOnBook';

function WellBookList() {
  const hasNewReview = useNewReviewId();
  return (
    <motion.div
      className='flex h-fit w-full flex-1 flex-col-reverse items-center'
      initial='hidden'
      animate='visible'
      variants={staggerContainerVariants}
    >
      {hasNewReview && <WellBook />}
      <WellBook />
      <FrogOnBook />
      <FrogOnBook />
      <FrogOnBook />
      <FrogOnBook />

      <FrogOnBook />
      <FrogOnBook />
    </motion.div>
  );
}

export default WellBookList;
