import React from 'react';
import { motion } from 'framer-motion';
import { pointing } from '@/styles/variants/variants';

function Pointing() {
  return (
    <div className='flex-center absolute left-0 top-[30px] z-[10px] h-full w-full'>
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
