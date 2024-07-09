'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';

interface Props extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  theme?: 'normal' | 'error';
}

function Button({
  children,
  type = 'button',
  disabled = false,
  theme = 'normal',
  ...props
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`button ${disabled && 'button-disabled'} ${theme === 'error' && 'bg-error'}`}
      variants={tapVariants}
      whileTap='tap'
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
