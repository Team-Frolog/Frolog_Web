'use client';

import { ScrollToTopIcon } from 'public/icons';
import React from 'react';

function ScrollToTop() {
  const handleScroll = () => {
    document.getElementById('main')!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      type='button'
      onClick={handleScroll}
      className='absolute bottom-[104px] right-[24px]'
    >
      <ScrollToTopIcon />
    </button>
  );
}

export default ScrollToTop;
