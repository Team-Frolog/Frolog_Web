import React from 'react';
import { motion } from 'framer-motion';
import { pointing } from '@/styles/variants/variants';

function Pointing() {
  return (
    <div className='absolute left-0 top-[30px] z-[10px] flex h-full w-full items-center justify-center'>
      {[0.4, 0.8, 1.2].map((delay) => (
        <motion.div
          key={delay}
          animate={pointing.animate}
          transition={{ ...pointing.transition, delay }}
          className='circle'
        />
      ))}
    </div>
  );
}

export default Pointing;
