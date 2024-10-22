'use client';

import { ScrollToTopIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

function ScrollToTop() {
  const handleScroll = () => {
    document.getElementById('main')!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <motion.button
      type='button'
      whileTap={{ scale: 0.95 }}
      onClick={handleScroll}
      className='absolute bottom-[104px] right-[24px] z-50'
    >
      <ScrollToTopIcon />
    </motion.button>
  );
}

export default ScrollToTop;
