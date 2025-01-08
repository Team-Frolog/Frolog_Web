'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { tapVariants } from '@/styles/variants/variants';
import { getButtonColor } from '@/utils/getButtonColor';

interface Props extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  theme?: 'normal' | 'error' | 'gray' | 'light' | string;
}

/** 기본 버튼 컴포넌트
 * - theme을 전달하여 버튼의 색상을 조정할 수 있습니다.
 */
function Button({
  children,
  type = 'button',
  disabled = false,
  theme = 'normal',
  ...props
}: Props) {
  const buttonType = getButtonColor(theme);

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`${disabled ? 'button-disabled' : ''} ${buttonType}`}
      variants={tapVariants}
      whileTap='tap'
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
