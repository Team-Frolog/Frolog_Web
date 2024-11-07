'use client';

import { BackIcon, WellBackIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Props {
  onClick?: () => void;
  fill?: string;
  extraClass?: string;
  type?: 'normal' | 'green';
  safeArea?: 'back-button' | 'back-fixed';
}

function BackButton({
  onClick,
  fill = '#B3B6C4',
  extraClass,
  type = 'normal',
  safeArea,
}: Props) {
  const router = useRouter();
  return (
    <>
      {type === 'normal' ? (
        <button
          id={safeArea}
          type='button'
          className={`cursor-pointer ${extraClass}`}
          onClick={onClick || (() => router.back())}
        >
          <BackIcon id='icon' fill={fill} />
        </button>
      ) : (
        <motion.button
          id={safeArea}
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
