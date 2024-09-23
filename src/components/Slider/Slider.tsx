'use client';

import { useSlideDrag } from '@/hooks/gesture/useSlideDrag';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  sliderClass?: string;
  slideClass?: string;
  hasFade?: boolean;
  isBetween?: boolean;
}

function Slider({
  children,
  sliderClass,
  slideClass,
  hasFade = false,
  isBetween = false,
}: Props) {
  const { sliderRef, motionDivRef, drag, widthClass } = useSlideDrag(isBetween);

  return (
    <div ref={sliderRef} className={sliderClass}>
      {hasFade && (
        <>
          <div
            className='absolute bottom-0 left-0 z-10 h-full w-[50px] -rotate-180 transition-all duration-300'
            style={{
              boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)',
            }}
          />
          <div
            className='absolute bottom-0 right-0 z-10 h-full w-[30px] transition-all duration-300'
            style={{
              boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)',
            }}
          />
        </>
      )}
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className={`flex h-full px-[24px] ${widthClass} ${slideClass}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Slider;
