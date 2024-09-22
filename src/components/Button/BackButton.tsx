'use client';

import { BackIcon, WellBackIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onClick: () => void;
  fill?: string;
  extraClass?: string;
  type?: 'normal' | 'green';
}

function BackButton({
  onClick,
  fill = '#B3B6C4',
  extraClass,
  type = 'normal',
}: Props) {
  return (
    <>
      {type === 'normal' ? (
        <button
          type='button'
          className={`cursor-pointer ${extraClass}`}
          onClick={onClick}
        >
          <BackIcon id='icon' fill={fill} />
        </button>
      ) : (
        <motion.button
          type='button'
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className='absolute left-[12px] top-[12px] z-70'
        >
          <WellBackIcon />
        </motion.button>
      )}
    </>
  );
}

export default BackButton;
