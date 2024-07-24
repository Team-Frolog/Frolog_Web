import React from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';

function WellBook() {
  const router = useRouter();
  const newReviewId = useNewReviewId();

  return (
    <motion.div
      onClick={() => router.push('/well-book/9791193154250/review')}
      variants={newReviewId ? staggerItemVariants : undefined}
      className='flex w-[85%] justify-center bg-yellow-300 px-[18px] py-[12px]'
    >
      <span className='text-body_sm_bold'>메리와 메리</span>
    </motion.div>
  );
}

export default WellBook;
