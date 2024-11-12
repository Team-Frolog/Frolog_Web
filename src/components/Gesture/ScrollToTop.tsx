'use client';

import { ScrollToTopIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  type?: 'nav' | 'floating';
}

function ScrollToTop({ type = 'nav' }: Props) {
  const handleScroll = () => {
    document.getElementById('main')!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <motion.button
      id={type === 'nav' ? 'nav-floating' : 'floating'}
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
