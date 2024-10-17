'use client';

import React from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { motion } from 'framer-motion';
import { GetWellRes } from '@frolog/frolog-api';
import ScrollToTop from '@/components/Button/ScrollToTop';
import WellBook from './WellBook';
import FrogOnBook from '../Well/FrogOnBook';

interface Props {
  userId?: string;
  wellData: GetWellRes;
}

function WellBookList({ userId, wellData }: Props) {
  const hasNewReview = useNewReviewId();
  console.log(wellData);

  return (
    <motion.div
      className='flex h-fit w-full flex-1 flex-col-reverse items-center'
      initial='hidden'
      animate='visible'
      variants={staggerContainerVariants}
    >
      <div className='h-[12px] w-full shrink-0 rounded-t-[20px] bg-gray-900' />
      {hasNewReview && <WellBook isReading />}
      <WellBook isReading />
      <WellBook userId={userId} />
      <FrogOnBook />
      <ScrollToTop />
    </motion.div>
  );
}

export default WellBookList;
