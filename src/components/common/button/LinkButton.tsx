'use client';

import { tapVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
}

const MotionLink = motion(Link);

function LinkButton({ children, route, disabled }: Props) {
  const classes = `button text-center ${disabled && `button-disabled`}`;
  return (
    <MotionLink
      variants={tapVariants}
      whileTap='tap'
      href={route}
      className={classes}
    >
      {children}
    </MotionLink>
  );
}

export default LinkButton;
