'use client';

import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';
import { CircleCheckIcon, CircleUncheckIcon } from 'public/icons';

interface Props extends HTMLMotionProps<'button'> {
  isChecked: boolean;
  theme?: 'dark' | 'light';
}

/** Checkbox 기능을 하는 버튼
 * - theme을 기준으로 dark / light 모드를 전환합니다.
 */
function CheckButton({ isChecked, theme = 'dark', ...props }: Props) {
  return (
    <motion.button
      variants={tapVariants}
      whileTap='tap'
      type='button'
      className='h-[24px] w-[24px]'
      {...props}
    >
      {isChecked ? (
        <CircleCheckIcon />
      ) : (
        <CircleUncheckIcon fill={theme === 'dark' ? '#727484' : '#E0E1E9'} />
      )}
    </motion.button>
  );
}

export default CheckButton;
