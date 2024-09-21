'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { modalBackgroundVariants } from '@/styles/variants/variants';
import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';

interface Props {
  children: React.ReactNode;
  align: 'center' | 'end';
}

function BackDrop({ children, align }: Props) {
  useScrollFreeze();
  const alignmentClass =
    align === 'center'
      ? 'flex flex-col justify-center items-center'
      : 'flex items-end';

  return (
    <motion.div
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className={`${alignmentClass} fixed inset-x-0 left-0 top-0 z-90 mx-auto h-dvh w-[450px] mobile:inset-0 mobile:left-0 mobile:w-full`}
      style={{ zIndex: '90' }}
    >
      {children}
    </motion.div>
  );
}

export default BackDrop;
