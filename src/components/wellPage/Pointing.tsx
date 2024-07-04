import React from 'react';
import { motion } from 'framer-motion';

function Pointing() {
  return (
    <div className='absolute left-0 top-[30px] z-[10px] flex h-full w-full items-center justify-center'>
      <motion.div
        animate={{
          opacity: [1, 1, 0],
          scale: [0, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.8,
          ease: 'linear',
        }}
        className='circle'
      />
      <motion.div
        animate={{
          opacity: [1, 1, 0],
          scale: [0, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
          repeatDelay: 0.8,
          ease: 'linear',
        }}
        className='circle'
      />
      <motion.div
        animate={{
          opacity: [1, 1, 0],
          scale: [0, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.8,
          repeatDelay: 0.8,
          ease: 'linear',
        }}
        className='circle'
      />
    </div>
  );
}

export default Pointing;
