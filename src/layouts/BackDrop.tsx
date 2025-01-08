'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { modalBackgroundVariants } from '@/styles/variants/variants';
import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';

interface Props {
  children: React.ReactNode;
  /** 자식 컴포넌트의 위치 */
  align: 'center' | 'end';
}

/** 바텀시트, 팝업 등에 활용되는 검은 반투명 배경
 * @param align - 'center', 'end' 자식 컴포넌트의 위치를 결정합니다.
 */
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
      className={`${alignmentClass} safe-screen fixed inset-x-0 left-0 top-0 z-90 mx-auto w-[450px] mobile:inset-0 mobile:left-0 mobile:w-full`}
      style={{ zIndex: '90' }}
    >
      {children}
    </motion.div>
  );
}

export default BackDrop;
