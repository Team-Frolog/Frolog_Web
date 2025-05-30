'use client';

import Link, { LinkProps } from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { HTMLMotionProps, motion } from 'framer-motion';
import { NavItemKey } from '@/types/nav';

const MotionLink = motion.create(Link);

interface Props extends LinkProps, HTMLMotionProps<'a'> {
  /** 이동할 경로 */
  href: string;
  /** 탭 id 값 */
  navKey?: NavItemKey;
}

/** 탭 상태를 함께 관리하도록 url에 tapKey를 붙여주는 커스텀 Link의 모션 버전 */
function CustomMotionLink({ href, navKey, ...props }: Props) {
  const currentTapKey = useSearchParams().get('nav') || '';
  const separator = href.includes('?') ? '&' : '?';

  return (
    <MotionLink
      href={`${href}${separator}nav=${navKey || currentTapKey}`}
      {...props}
    />
  );
}

export default CustomMotionLink;
