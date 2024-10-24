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
  message?: string;
}

function FrogOnBook({ message, frogId = 'default' }: Props) {
  const hasNewReview = useNewReviewId();

  return (
    <motion.div
      variants={hasNewReview ? staggerItemVariants : undefined}
      className='flex-col-center pt-[20px]'
    >
      <GuideChat message={message} />
      <Image src={FROG_SITTING[frogId]} alt='frog' width={90} height={120} />
    </motion.div>
  );
}

export default FrogOnBook;
