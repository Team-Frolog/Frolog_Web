'use client';

import { tapVariants } from '@/styles/variants/variants';
import { getButtonColor } from '@/utils/getButtonColor';
import React from 'react';
import CustomMotionLink from '../Link/CustomMotionLink';

interface Props {
  children: React.ReactNode;
  route: string;
  disabled?: boolean;
  theme?: 'normal' | 'light' | 'gray' | 'ghost';
  extraClass?: string;
  isReplace?: boolean;
}

/** 기본 버튼 컴포넌트와 같은 스타일의 Link */
function LinkButton({
  children,
  route,
  disabled = false,
  theme = 'normal',
  extraClass,
  isReplace = false,
}: Props) {
  const buttonType = getButtonColor(theme);

  return (
    <CustomMotionLink
      variants={tapVariants}
      whileTap='tap'
      href={route}
      replace={isReplace}
      className={`block text-center ${buttonType} ${disabled ? 'button-disabled' : ''} ${extraClass}`}
    >
      {children}
    </CustomMotionLink>
  );
}

export default LinkButton;
