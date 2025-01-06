'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { pointing } from '@/styles/variants/variants';

/** 우물 내 클릭 유도 애니메이션 */
function Pointing() {
  return (
    <div className='flex-center absolute left-0 top-0 z-10 h-full w-full'>
      {[0.4, 0.8, 1.2].map((delay) => (
        <motion.div
          key={delay}
          animate={pointing.animate}
          transition={{ ...pointing.transition, delay }}
          className='pointing-circle'
        />
      ))}
    </div>
  );
}

export default Pointing;
