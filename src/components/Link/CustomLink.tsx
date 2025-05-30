'use client';

import Link, { LinkProps } from 'next/link';
import React, { HTMLAttributes } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavItemKey } from '@/types/nav';

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  /** 이동할 경로 */
  href: string;
  /** 탭 id 값 */
  navKey?: NavItemKey;
}

/** 탭 상태를 함께 관리하도록 url에 tapKey를 붙여주는 커스텀 Link */
function CustomLink({ href, navKey, ...props }: Props) {
  const currentTapKey = useSearchParams().get('nav') || '';
  const separator = href.includes('?') ? '&' : '?';

  return (
    <Link
      href={`${href}${separator}nav=${navKey || currentTapKey}`}
      {...props}
    />
  );
}

export default CustomLink;
