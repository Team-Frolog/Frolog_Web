'use client';

import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';
import { CircleCheckIcon, CircleUncheckIcon } from 'public/icons';

interface Props extends HTMLMotionProps<'button'> {
  isChecked: boolean;
}

function CheckButton({ isChecked, ...props }: Props) {
  return (
    <motion.button
      variants={tapVariants}
      whileTap='tap'
      type='button'
      className='h-[24px] w-[24px]'
      {...props}
    >
      {isChecked ? <CircleCheckIcon /> : <CircleUncheckIcon />}
    </motion.button>
  );
}

export default CheckButton;
