'use client';

import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Portal from './Portal';
import BackDrop from './BackDrop';

interface Props {
  children: React.ReactNode;
  closePopUp: () => void;
}

/** 팝업을 위한 레이아웃 */
function PopUpLayout({ children, closePopUp }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => {
    document.body.style.overflow = 'auto';
    closePopUp();
  });

  return (
    <Portal>
      <BackDrop align='center'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.2 }}
          className='z-100 flex h-fit w-[85%] flex-col rounded-[20px] bg-white'
          style={{ maxHeight: '70%', zIndex: 100 }}
        >
          {children}
        </motion.div>
      </BackDrop>
    </Portal>
  );
}

export default PopUpLayout;
