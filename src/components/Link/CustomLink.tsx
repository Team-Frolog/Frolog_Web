import { TapKey } from '@/constants/taps';
import Link, { LinkProps } from 'next/link';
import React, { HTMLAttributes } from 'react';
import { useSearchParams } from 'next/navigation';

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  /** 이동할 경로 */
  href: string;
  /** 탭 id 값 */
  tapKey?: TapKey;
}

/** 탭 상태를 함께 관리하도록 url에 tapKey를 붙여주는 커스텀 Link */
function CustomLink({ href, tapKey, ...props }: Props) {
  const currentTapKey = useSearchParams().get('tap') || '';
  const separator = href.includes('?') ? '&' : '?';

  return (
    <Link
      href={`${href}${separator}tap=${tapKey || currentTapKey}`}
      {...props}
    />
  );
}

export default CustomLink;
