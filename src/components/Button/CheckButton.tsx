'use client';

import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';

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
      <Image
        src={
          isChecked
            ? ICONS.common.check.circle_checked
            : ICONS.common.check.circle_unchecked
        }
        alt='check'
        width={24}
        height={24}
      />
    </motion.button>
  );
}

export default CheckButton;
