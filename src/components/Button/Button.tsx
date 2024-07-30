'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';

interface Props extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  theme?: 'normal' | 'error' | 'gray' | string;
}

function Button({
  children,
  type = 'button',
  disabled = false,
  theme = 'normal',
  ...props
}: Props) {
  const getColor = () => {
    switch (theme) {
      case 'normal':
        return 'button-main';
      case 'error':
        return 'button-error';
      case 'gray':
        return 'button-gray';
      default:
        return `button-common ${theme}`;
    }
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`${disabled && 'button-disabled'} ${getColor()}`}
      variants={tapVariants}
      whileTap='tap'
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
