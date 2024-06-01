'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import { modalBackgroundVariants } from '@/styles/variants';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface PopUpProps {
  children: React.ReactNode;
  closePopUp: () => void;
}

function PopUpLayout({ children, closePopUp }: PopUpProps) {
  const ref = useRef<HTMLDivElement | null>(null); // 팝업에 대한 ref

  /* ----- 팝업 바깥 클릭 시 닫힘 hook ----- */
  useClickOutside(ref, () => {
    document.body.style.overflow = 'auto';
    closePopUp();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

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

// const Background = styled(motion.div)`
//   width: 100%;
//   height: calc(100dvh * 100);
//   background-color: ${({ theme }) => theme.colors.bg_popup};

//   position: fixed;
//   bottom: 0;
//   left: 0;
//   z-index: 900;

//   // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
//   @media screen and (min-width: 430px) {
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 450px;
//     height: 100vh;
//   }
// `;
