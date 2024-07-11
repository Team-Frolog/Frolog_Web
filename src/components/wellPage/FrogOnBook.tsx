'use client';

import { IMAGES } from '@/constants/images';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  useNewReviewId,
  useStackMotionActions,
} from '@/store/stackMotionStore';
import { staggerItemVariants } from '@/styles/variants/variants';
import React from 'react';
import GuideChat from '../common/GuideChat';

function FrogOnBook() {
  const hasNewReview = useNewReviewId();
  const { setIsStacked } = useStackMotionActions();

  return (
    <motion.div
      variants={hasNewReview ? staggerItemVariants : undefined}
      onAnimationComplete={() => setIsStacked(true)}
      className='flex flex-col items-center'
    >
      <GuideChat />
      <Image src={IMAGES.frog.sitting} alt='frog' width={90} height={120} />
    </motion.div>
  );
}

export default FrogOnBook;
