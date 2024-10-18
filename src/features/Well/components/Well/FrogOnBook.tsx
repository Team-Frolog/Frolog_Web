'use client';

import { FROG_SITTING } from '@/constants/frogs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useNewReviewId } from '@/store/stackMotionStore';
import { staggerItemVariants } from '@/styles/variants/variants';
import React from 'react';
import GuideChat from './GuideChat';

interface Props {
  frogId?: string;
  isRootUser: boolean;
}

function FrogOnBook({ frogId = 'default', isRootUser }: Props) {
  const hasNewReview = useNewReviewId();

  return (
    <motion.div
      variants={hasNewReview ? staggerItemVariants : undefined}
      className='flex-col-center'
    >
      <GuideChat isRootUser={isRootUser} />
      <Image src={FROG_SITTING[frogId]} alt='frog' width={90} height={120} />
    </motion.div>
  );
}

export default FrogOnBook;
