'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';

interface Props extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

function Button({
  children,
  type = 'button',
  disabled = false,
  ...props
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`button ${disabled && 'button-disabled'}`}
      variants={tapVariants}
      whileTap='tap'
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
