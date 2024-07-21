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

function LinkButton({ children, route, disabled = false }: Props) {
  return (
    <MotionLink
      variants={tapVariants}
      whileTap='tap'
      href={route}
      className={`button-main block text-center ${disabled && `button-disabled`}`}
    >
      {children}
    </MotionLink>
  );
}

export default LinkButton;
