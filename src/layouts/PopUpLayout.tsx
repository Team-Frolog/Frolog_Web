'use client';

import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { modalBackgroundVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

interface PopUpProps {
  children: React.ReactNode;
  closePopUp: () => void;
}

function PopUpLayout({ children, closePopUp }: PopUpProps) {
  useScrollFreeze();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => {
    document.body.style.overflow = 'auto';
    closePopUp();
  });

  return (
    <motion.div
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '100dvh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 900,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2 }}
        style={{
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          height: 'fit-content',
          width: '85%',
          borderRadius: '20px',
          backgroundColor: 'white',
          maxHeight: '70%',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default PopUpLayout;
