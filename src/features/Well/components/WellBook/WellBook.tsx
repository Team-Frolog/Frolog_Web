import React from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';

function WellBook() {
  const newReviewId = useNewReviewId();

  return (
    <motion.div
      variants={newReviewId ? staggerItemVariants : undefined}
      className='flex w-[85%] justify-center bg-yellow-300 px-[18px] py-[12px]'
    >
      <span className='text-body_sm_bold'>메리와 메리</span>
    </motion.div>
  );
}

export default WellBook;
