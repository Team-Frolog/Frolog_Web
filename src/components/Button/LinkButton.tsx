'use client';

import { tapVariants } from '@/styles/variants/variants';
import { getButtonColor } from '@/utils/getButtonColor';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
  theme?: 'normal' | 'light' | 'gray';
}

const MotionLink = motion(Link);

function LinkButton({
  children,
  route,
  disabled = false,
  theme = 'normal',
}: Props) {
  const buttonType = getButtonColor(theme);

  return (
    <MotionLink
      variants={tapVariants}
      whileTap='tap'
      href={route}
      className={`block text-center ${buttonType} ${disabled && `button-disabled`}`}
    >
      {children}
    </MotionLink>
  );
}

export default LinkButton;
