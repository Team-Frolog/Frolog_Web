'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

function ImageSlider({ children }: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag='x'
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
