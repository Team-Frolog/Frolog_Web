'use client';

import { tapVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
  theme?: 'normal' | 'light';
}

const MotionLink = motion(Link);

function LinkButton({
  children,
  route,
  disabled = false,
  theme = 'normal',
}: Props) {
  return (
    <MotionLink
      variants={tapVariants}
      whileTap='tap'
      href={route}
      className={`block text-center ${disabled && `button-disabled`} ${theme === 'light' ? 'button-light' : 'button-main'}`}
    >
      {children}
    </MotionLink>
  );
}

export default LinkButton;
