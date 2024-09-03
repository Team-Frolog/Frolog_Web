'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSlideDrag } from '@/hooks/gesture/useSlideDrag';

interface Props {
  children: React.ReactNode;
}

function ImageSlider({ children }: Props) {
  const { sliderRef, motionDivRef, drag } = useSlideDrag();

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[20px] px-[24px]'
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ImageSlider;
