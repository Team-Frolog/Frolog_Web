import React from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { MemoBookmarkIcon } from 'public/icons';

function WellBook() {
  const router = useRouter();
  const newReviewId = useNewReviewId();

  return (
    <motion.div
      onClick={() => router.push('/well-book/9791193154250/review')}
      variants={newReviewId ? staggerItemVariants : undefined}
      className='flex w-[85%] items-center'
    >
      <div className='relative flex flex-1 justify-center bg-category-bg-novel px-[18px] py-[12px]'>
        <div className='absolute left-[20px] top-0 h-full w-[12px] bg-category-band-novel' />
        <span className='text-overflow-hidden w-[82%] text-center text-body_sm_bold'>
          메리와 메리
        </span>
      </div>
      <MemoBookmarkIcon />
    </motion.div>
  );
}

export default WellBook;
