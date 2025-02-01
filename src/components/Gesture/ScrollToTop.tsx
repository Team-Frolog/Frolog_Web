'use client';

import { ScrollToTopIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

/** 최상단으로 이동하기 컴포넌트 */
function ScrollToTop() {
  const handleScroll = () => {
    document.getElementById('main')!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      id='nav-floating'
      type='button'
      whileTap={{ scale: 0.95 }}
      onClick={handleScroll}
      className='absolute right-[24px] z-50'
    >
      <ScrollToTopIcon />
    </motion.button>
  );
}

export default ScrollToTop;
