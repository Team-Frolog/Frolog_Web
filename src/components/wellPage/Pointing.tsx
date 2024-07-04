import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/constants/images';

function Pointing() {
  return (
    <div className='absolute left-0 top-[30px] z-[10px] flex h-full w-full items-center justify-center'>
      <motion.img
        animate={{
          width: ['20%', '80%', '20%'],
        }}
        transition={{
          duration: 1.7,
          repeat: Infinity,
          repeatDelay: 0,
          ease: 'linear',
        }}
        src={IMAGES.well.pointing}
        alt='pointing'
        width={276}
        height={276}
      />
    </div>
  );
}

export default Pointing;
