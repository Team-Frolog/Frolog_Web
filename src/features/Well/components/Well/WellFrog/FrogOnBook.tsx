'use client';

import { FROGS } from '@/constants/frogs';
import { motion } from 'framer-motion';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { useNewReviewId } from '@/store/stackMotionStore';
import { leafVariants, frogVariants } from '@/styles/variants/variants';
import React from 'react';
import GuideChat from './GuideChat';

const MotionImage = motion(Image);

interface Props {
  frogId?: string;
  message?: string;
  zIndex: number;
}

function FrogOnBook({ message, frogId = 'default', zIndex }: Props) {
  const hasNewReview = useNewReviewId();

  return (
    <div className='relative z-20'>
      <MotionImage
        variants={hasNewReview ? leafVariants : undefined}
        style={{ zIndex }}
        className='absolute inset-x-0 bottom-[-8px] mx-auto h-[24px] w-[190px]'
        src={IMAGES.well.leaf}
        alt='leaf'
        width={190}
        height={24}
      />
      <motion.div
        style={{ zIndex: zIndex + 1 }}
        variants={hasNewReview ? frogVariants : undefined}
        className='flex-col-center relative z-[999px] pt-[20px]'
      >
        <GuideChat
          message={message}
          marginBottom={FROGS[frogId].marginBottom}
        />
        <Image src={FROGS[frogId].src} alt='frog' width={150} height={150} />
      </motion.div>
    </div>
  );
}

export default FrogOnBook;
