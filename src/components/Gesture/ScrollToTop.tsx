'use client';

import { ScrollToTopIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  /** nav 위에 있는지 여부 */
  isOnNav?: 'nav' | 'floating';
}

/** 맨 위로 이동하기 컴포넌트
 * @param isOnNav - nav 위에 위치한 경우 true, 아닌 경우 false
 */
function ScrollToTop({ isOnNav: type = 'nav' }: Props) {
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
